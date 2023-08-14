# Use the official Python 3.9 image as a base
FROM python:3.9

RUN apt update -y
RUN apt install -y less vim git
RUN git clone https://github.com/jscad/OpenJSCAD.org.git
WORKDIR OpenJSCAD.org/packages/web
RUN cp -r ../examples .
EXPOSE 8000
CMD python3.9 -m http.server
