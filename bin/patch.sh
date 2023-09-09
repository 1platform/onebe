#!/usr/bin/env bash
set -e

SED="sed"

if [[ $OSTYPE == 'darwin'* ]]; then
  SED="gsed"
fi

$SED -i "s/sourceType: 'script'/sourceType: 'module'/gI" node_modules/@jest/reporters/node_modules/istanbul-lib-instrument/src/read-coverage.js
