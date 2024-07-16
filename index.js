import { extname } from "node:path";

/**
 *
 * @param {string} ext - The expected extension
 * @returns {(path:string) => boolean}
 *
 */
export function isExtFactory(ext) {
  
  return function isThisExt(path) {
    //dotfile & dotless files => "" empty str
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

export const isJS = isExtFactory(".js");
export const isJSX = isExtFactory(".jsx");
export const isTS = isExtFactory(".ts");
export const isTSX = isExtFactory(".tsx");
export const isJSON = isExtFactory(".json");
