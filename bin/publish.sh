#!/usr/bin/env bash
set -e
cd "$(dirname "$0")/.."

MODE=$1

if [[ -e $MODE || ($MODE != "patch" && $MODE != "minor" && $MODE != "major") ]]; then
  MODE="patch"
fi

yarn compile:cleanup

sed -i "s/export const version.*/export const version = \"$npm_package_version\";/g" src/version.ts
sed -i "s/- Version: .*/- Version: $npm_package_version/g" README.md

yarn build
#git commit -am "Version bump to $npm_package_version"
#git tag $npm_package_version

rm -rf publish
mkdir publish
cd publish
cp -r ../dist/* ./
cp -r ../.yarn ./
cp ../.eslintrc ./
cp ../README.md ./
cp ../.yarnrc.yml ./
cp ../LICENSE.md ./
cp ../yarn.lock ./
node ../bin/build.js

NODE_ENV=prod yarn install
#yarn npm publish
#git push

#cd ../
#rm -rf publish

echo "Successfully released version $npm_package_version!"
