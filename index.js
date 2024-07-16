import { extname, basename } from "node:path";
import { isDotFile, startsWithDot, getClassName } from "./utils.js";

/**
 *
 * @param {string} ext - The expected extension
 * @returns {(path:string) => boolean}
 *
 */
export function isExtFactory(ext) {
  if (typeof ext !== "string") {
    throw new Error(
      `Argument must be of type string. Received: ${typeof ext}; ${getClassName(
        ext
      )}`
    );
  }
  return function isThisExt(path) {
    const fileName = basename(path);

    //dotfile & dotless files => "" empty str
    const extNameResult = extname(fileName);

    //either one or more dots
    if (isDotFile(fileName)) {
      return ext === fileName;
    }

    //others (non-dotfile, extless)
    else if (extNameResult === "") {
      return ext.toLowerCase() === path.toLowerCase();
    }

    //ext files but missing "."
    else {
      if (!startsWithDot(ext)) {
        ext = "." + ext;
      }
    }

    return ext === extNameResult;
  };
}

export const isJS = isExtFactory(".js");
export const isTS = isExtFactory(".ts");
export const isJSON = isExtFactory(".json");
