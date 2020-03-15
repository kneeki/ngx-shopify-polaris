#!/usr/bin/env bash

read -p 'Version type (major/minor/patch): ' version

cd src
npm version $version
cd ..
npm run build
npm publish dist