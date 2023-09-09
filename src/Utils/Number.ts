/**
 * Generates a random number between two numbers.
 *
 * @param start The starting point.
 * @param end The max number to be generated.
 */
export function random(start = 0, end = 100000): number {
  if (start === null || start === undefined || Number.isNaN(start)) {
    start = 0;
  }
  if (end === null || end === undefined || Number.isNaN(end)) {
    end = 100000;
  }
  start = Math.abs(start);
  end = Math.abs(end);
  if (start > end) {
    const aux = start;
    start = end;
    end = aux;
  }

  let randomNumber = Math.random();
  const maxNumber = Math.round(Math.log10(end));
  randomNumber = Math.round(randomNumber * Math.pow(10, maxNumber)) % end;
  return randomNumber < start ? start : randomNumber;
}

/**
 * Generates a random number of a fixed size.
 *
 * @param size The number of digits of the number.
 */
export function fixedSizeRandom(size: number): string {
  if (!size || size < 1 || Number.isNaN(size)) {
    return "";
  }
  size = Math.floor(size);
  const maxSize = Math.pow(10, size);
  return Math.round((Math.random() * maxSize) % maxSize)
    .toString()
    .padStart(size, "0");
}
