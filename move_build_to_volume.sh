#!/bin/sh

mkdir -p build_to_volume
cd build_to_volume
rm -r *
cp -rv ../build/* .
