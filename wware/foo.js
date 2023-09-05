const { extrudeLinear } = require('@jscad/modeling').extrusions;
const { path2 } = require('@jscad/modeling').geometries;
const { translate } = require('@jscad/modeling').transforms;
const { colorize } = require('@jscad/modeling').colors;
const PI = 3.14159265358;
// the angle increment will be about 5 degrees
const INCREMENT = 0.1;   // radians

const _lim_two_pi = (x) => {
  while (x < 0) { x += 2 * PI; }
  while (x > 2 * PI) { x -= 2 * PI; }
  return x;
}

const _arc = (path, cx, cy, r, span, start) => {
  // start and finish are in RADIANS
  let points = [];
  const numsteps = Math.floor(Math.abs(span) / INCREMENT);
  const step = span / numsteps;
  for (const i of Array(numsteps+1).keys()) {
    const theta = start + i * step;
    points.push([cx + r * Math.cos(theta), cy + r * Math.sin(theta)]);
  }
  return path2.appendPoints(points, path);
}

const clockwise = (path, cx, cy, r, start, finish) => {
  return _arc(path, cx, cy, r, -_lim_two_pi(start - finish), start);
}

const counterclockwise = (path, cx, cy, r, start, finish) => {
  return _arc(path, cx, cy, r, _lim_two_pi(finish - start), start);
}

const main = () => {
  // The ordering of points is VERY IMPORTANT. If the polygon is going to be
  // extruded then the points must be in counter-clockwise order, otherwise
  // the faces of the object will be facing inwards.
  let path = path2.create([[0, 0]])
  path = counterclockwise(path, 5, 5, 5, 1.5 * PI, 0);
  path = clockwise(path, 15, 15, 5, PI, .5 * PI);
  path = path2.appendPoints([[0,  20]], path);
  const shape = colorize(
    [0, 0.5, 0.5, 0.5],
    extrudeLinear({height: 2}, path2.close(path))
  );
  // return [translate([0, 0, -1], shape)];
  return [shape];
}

module.exports = { main };
