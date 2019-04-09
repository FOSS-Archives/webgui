#!/bin/sh
npm run build
rm -rf ../extras/Kestrel
mv build ../extras/Kestrel
