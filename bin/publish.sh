#!/usr/bin/env bash
set -e
cd "$(dirname "$0")/.."
WORKDIR=`pwd`

MODE=$1

if [[ -e $MODE || ($MODE != "patch" && $MODE != "minor" && $MODE != "major") ]]; then
  MODE="patch"
fi

yarn app:compile:cleanup

sed -i "s/export const version.*/export const version = \"$npm_package_version\";/g" src/version.ts
sed -i "s/.*expect(getVersion()).toBe(\".*/    expect(getVersion()).toBe(\"$npm_package_version-DEV\");/g" src/version.test.ts
sed -i "s/.*expect(getVersionCodename()).toBe(\".*/    expect(getVersionCodename()).toBe(\"$npm_package_version-DEV (Rebuild)\");/g" src/version.test.ts
sed -i "s/- Version: .*/- Version: v$npm_package_version/g" README.md

yarn app:build
git commit -am "Version bump to v$npm_package_version"
git tag $npm_package_version

rm -rf /tmp/publish
mkdir /tmp/publish
cp -r ./dist/* /tmp/publish
cp -r ./.yarn /tmp/publish
cp -r ./.gitignore /tmp/publish
cp -r ./.nodeignore /tmp/publish
cp ./.eslintrc /tmp/publish
cp ./README.md /tmp/publish
cp ./CHANGELOG.md /tmp/publish
cp ./.yarnrc.yml /tmp/publish
cp ./LICENSE.md /tmp/publish
node ./bin/build.js

cd /tmp/publish
NODE_ENV=prod yarn install
yarn npm publish

cd $WORKDIR
git push

rm -rf /tmp/publish

echo "Successfully released version v$npm_package_version!"
