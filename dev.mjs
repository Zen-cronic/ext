import { extname } from "node:path";

/**
 *
 * @param {string} ext
 * @returns {(path:string) => boolean}

 */
function isExtGenerator(ext) {
  /**
   * @param {string} path
   */
  return function isThisExt(path) {
    //.env & makefile => "" empty str
    // if extname returns "" => handle differently

    
    const extnameResult = extname(path);

    //either dotfiles or others
    if (extnameResult === "") {
      console.log("Provided ext:", ext);

      //dotfile
    //   if (startsWithDot(ext)) {
      if (isDotFile(ext)) {
        return ext === path;
      }

      //other
      else {
        return ext.toLowerCase() === path.toLowerCase();
      }
    }

    //not for every file (e.g., makefile)
    // else {
    if (!startsWithDot(ext)) {
      ext = "." + ext;
    }
    // }

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
  // regex or startWith
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
