import { extname } from "node:path";

/**
 *
 * @param {string} ext - The expected extension
 * @returns {(path:string) => boolean}
 *
 */
function isExtGenerator(ext) {
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

const isJS = isExtGenerator(".js");
const isJSX = isExtGenerator("jsx");
const isTS = isExtGenerator("ts");
const isTSX = isExtGenerator(".tsx");
const isEnv = isExtGenerator(".env");
const isLocalEnv = isExtGenerator(".env.local");
const isMakefile = isExtGenerator("makefile");

const jsPath = "index.js";
const jsxPath = "index.jsx";
const tsPath = "index.ts";
const tsxPath = "index.tsx";
const envPath = ".env";
const localEnvPath = ".env.local";
const makeFilePath = "makefile";

console.log(isJS(jsPath));
console.log(isJSX(jsxPath));
console.log(isTS(tsPath));
console.log(isTSX(tsxPath));
console.log(isEnv(envPath));
console.log("local env test:", isLocalEnv(localEnvPath));
console.log(isMakefile(makeFilePath));
