"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixedSizeRandom = fixedSizeRandom;
exports.random = random;

/**
 * Generates a random number between two numbers.
 *
 * @param start The starting point.
 * @param end The max number to be generated.
 */
function random(start = 0, end = 100000) {
  if (Number.isNaN(start)) {
    start = 0;
  }

  if (Number.isNaN(end)) {
    end = 100000;
  }

  let randomNumber = Math.random();
  const maxNumber = Math.floor(Math.log10(end));
  randomNumber = randomNumber * Math.pow(10, maxNumber) % (end + 1);
  return randomNumber < start ? start : randomNumber;
}
/**
 * Generates a random number of a fixed size.
 *
 * @param size The number of digits of the number.
 */


function fixedSizeRandom(size) {
  const maxSize = Math.pow(10, size);
  return Math.floor(Math.random() * maxSize % maxSize).toString();
}