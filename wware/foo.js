/* https://openjscad.xyz/dokuwiki/doku.php */

const { extrudeLinear } = require('@jscad/modeling').extrusions;
const { path2 } = require('@jscad/modeling').geometries;

const main = () => {
  const num_segments = 120;
  const knee_radius = 5;

  let mypath = path2.create([[0, 0]])

  mypath = path2.appendArc({
    endpoint: [5, 5],
    radius: [knee_radius, knee_radius],
    clockwise: true
  }, mypath);

  mypath = path2.appendPoints([
    [20,  5]
  ], mypath);

  mypath = path2.appendArc({
    endpoint: [25, 10],
    radius: [knee_radius, knee_radius],
    clockwise: false
  }, mypath);

  mypath = path2.appendPoints([
    [30, 20], [0, 20], [0,  0]
  ], mypath);
  const myshape = extrudeLinear({height: 2}, path2.close(mypath));
  return [myshape];
}

module.exports = { main };
