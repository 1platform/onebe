#!/usr/bin/env node

const fs = require("fs");
const pkg = require("../package.json");

const newPkg = {
  name: "onebe",
  version: pkg.version,
  packageManager: pkg.packageManager,
  description: pkg.description,
  module: "index.js",
  types: "index.d.ts",
  main: "index.js",
  repository: pkg.repository,
  keywords: pkg.keywords,
  author: pkg.author,
  license: pkg.license,
  bugs: pkg.bugs,
  homepage: pkg.homepage,
  dependencies: pkg.dependencies,
}

fs.writeFileSync(`${process.cwd()}/package.json`, JSON.stringify(newPkg, null, 2), "utf-8");
