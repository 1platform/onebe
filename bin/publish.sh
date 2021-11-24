#!/usr/bin/env bash
set -e
cd "$(dirname "$0")/.."

MODE=$1

if [[ -e $MODE || ($MODE != "patch" && $MODE != "minor" && $MODE != "major") ]]; then
  MODE="patch"
fi

yarn version --$MODE
#git tag $npm_package_version
#git commit -am "Version bump to $npm_package_version"

mkdir publish_build
cd publish_build
cp ../dist/* ./
cp ../docs ./docs
node ../bin/build.js

#yarn publish
#git push

echo "Successfully released version $npm_package_version!"
