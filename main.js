function generateRandNum(includedMin, includedMax) {
   return Math.floor(Math.random() * (includedMax - includedMin + 1)) + 1;
}