/**
 *
 * @param {string} str
 * @returns {boolean}
 */
export function startsWithDot(str) {
  return str.startsWith(".");
}

/**
 *
 * @param {string} fileName
 * @returns {boolean}
 */
export function isDotFile(fileName) {
  return /(?:^|[\\\/])(\.[^\\\/]+)$/.test(fileName);
}

/**
 *
 * @param {*} o
 * @returns {string}
 */
export function getClassName(o) {
  return Object.prototype.toString.call(o);
}
