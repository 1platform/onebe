#!/usr/bin/env bash
set -e
cd "$(dirname "$0")/.."

MODE=$1

if [[ -e $MODE || ($MODE != "patch" && $MODE != "minor" && $MODE != "major") ]]; then
  MODE="patch"
fi

yarn version $MODE
#git tag $npm_package_version
#git commit -am "Version bump to $npm_package_version"

rm -rf publish
mkdir publish
cd publish
cp -r ../dist/* ./
cp -r ../docs ./docs
node ../bin/build.js

#yarn npm publish
#git push

# cd ../
#rm -rf publish

echo "Successfully released version $npm_package_version!"
