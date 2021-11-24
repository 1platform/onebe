#!/usr/bin/env bash
set -e
cd "$(dirname "$0")/.."

BUILD_ID=$(git rev-parse --short HEAD)

yarn
yarn lint
yarn compile:check
yarn compile:cleanup

yarn compile
yarn compile:check
yarn docs:gen

cat > ./dist/build.js << EOF
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "$BUILD_ID";
exports.default = _default;
EOF

cat > ./dist/build.d.ts << EOF
declare const _default: "$BUILD_ID";
export default _default;
EOF

echo "BUILD COMPLETED"
