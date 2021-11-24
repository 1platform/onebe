#!/usr/bin/env bash
set -e
cd "$(dirname "$0")/.."

MODE=$1

if [[ -e $MODE || ($MODE != "patch" && $MODE != "minor" && $MODE != "major") ]]; then
  MODE="patch"
fi

yarn compile:cleanup

sed -i "s/export const version.*/export const version = \"$npm_package_version\";/g" src/version.ts
sed -i "s/- Version: .*/- Version: v$npm_package_version/g" README.md

yarn build
git commit -am "Version bump to v$npm_package_version"

rm -rf /tmp/publish
mkdir /tmp/publish
cp -r ../dist/* /tmp/publish
cp -r ../.yarn /tmp/publish
cp ../.eslintrc /tmp/publish
cp ../README.md /tmp/publish
cp ../CHANGELOG.md /tmp/publish
cp ../.yarnrc.yml /tmp/publish
cp ../LICENSE.md /tmp/publish
node ../bin/build.js

cd /tmp/publish
NODE_ENV=prod yarn install
yarn npm publish
git push

cd ../
rm -rf /tmp/publish

echo "Successfully released version v$npm_package_version!"
