import { extname } from "node:path";

/**
 *
 * @param {string} ext - The expected extension
 * @returns {(path:string) => boolean}
 *
 */
export function isExtGenerator(ext) {
  /**
   * @param {string} path
   */
  return function isThisExt(path) {
    //.env & makefile => "" empty str
    // if extname returns "" => handle differently
    const extnameResult = extname(path);

    //either one or more dots
    if (isDotFile(path)) {
      return ext === path;
    }

    //others (non-dotfile, extless)
    else if (extnameResult === "") {
      console.log("Provided ext:", ext);

      return ext.toLowerCase() === path.toLowerCase();
    }

    //ext files but missing "."
    else {
      if (!startsWithDot(ext)) {
        ext = "." + ext;
      }
    }

    return ext === extnameResult;
  };
}

/**
 *
 * @param {string} str
 * @returns {boolean}
 */
function startsWithDot(str) {
  return str.startsWith(".");
}

/**
 *
 * @param {string} fileName
 * @returns {boolean}
 */
function isDotFile(fileName) {
  return /^\.[^\.].*/.test(fileName);
}

export const isJS = isExtGenerator(".js");
export const isJSX = isExtGenerator(".jsx");
export const isTS = isExtGenerator(".ts");
export const isTSX = isExtGenerator(".tsx");
export const isJSON = isExtGenerator(".json");

