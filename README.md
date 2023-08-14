# Building a Vulcan harp

Also called a Vulcan lute, Vulcan lyre, or
Vulcan "lyrette".

![Picture](https://midlifecrisiscrossover.files.wordpress.com/2022/09/vulcan-lute.jpg)

https://memory-beta.fandom.com/wiki/Ka%27athyra

My big immediate concern is that the strings are
way too close together, the angle between them
is too small. So I'd like to move those knobs
from the top edge to the side edge away from
the strings, so that the strings can spread
out. That means the stick part at the top will
be at more of an angle which means more stress
on the wood, not sure what to do about that.

Run OpenJSCAD in a docker container and use it to design the pieces.
Put all that in a git repo.

Tag the pieces as wood, metal, or plastic. Pick out the plastic pieces
for 3d printing, wood and metal pieces for laser cutting or CNC milling.
Check 100k garages, in Westford there is a 4x8 Shopbot. Can it do tool changes?

Why JS? Programmatic design with a real language, and unit testing (Mocha, Jest).

The same JS code can produce a BOM and a budget. Maybe it could help with mechanical calculations, stress and strain, vibration modes, stiffness, etc.

Think about docker compose to pull in a finite element solver for stress analysis etc.

https://www.matecdev.com/posts/best-open-source-fem.html

## Features, parts, etc

* Piezo transducer with preamp
  https://www.eleccircuit.com/acoustic-guitar-pickup-circuit-using-tl071/
* Tuning pegs from Amazon
* Guitar strings? from Amazon
* Knobs and controls
  * volume
  * echo, reverb, other delay effects
  * distortion, fuzz
  * record a bass line and play it like a continuo

Use three or four sets of nylon guitar strings and put a post pickup on the frame near some kind of resonant chamber. Need a half inch spacing so strings are individually pluckable. Think about reach.

Assume 2.5 cm along the top thing, that's 45 inches? Nope. 24 inches along the top for 18 strings is 1.33 cm up there, maybe 0.5 cm near the top edge of the body.

## OpenJSCad for mechanical design

Put it in a docker container. For now, just copy and paste
the source file into the browser, which will allow you to
view and edit, and export STL and DXF files for fabrication.

Later see if I can mount a local directory in the docker container
so I can just import the file directly into the OpenJSCAD browser
session without copying and pasting.