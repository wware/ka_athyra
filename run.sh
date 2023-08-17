#!/bin/bash -xe

docker build -t openjscad .
# docker run --rm -it -v $(pwd):/OpenJSCAD.org/packages/web/examples/foobar -p 8000:8000 openjscad $1
# docker run --rm -it -p 8000:8000 openjscad $1

docker run --rm -it -v $(pwd)/wware:/wware -p 8000:8000 openjscad $*
