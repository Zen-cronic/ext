const {extname} = require("path")


function isExt(path) {
    return extname(path)  
}


const indexPath =   "index.js"

console.log(isExt(indexPath));  //".js"

const envPath = ".env"
console.log(isExt(envPath) );  //"" empty str (+ \n)

const makeFilePath = "makefile"
console.log(isExt(makeFilePath)); //"" empty str (+ \n)

const localEnvPath = ".env.local"
console.log(isExt(localEnvPath));  // .local 


