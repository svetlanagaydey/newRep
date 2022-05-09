const maskify = function(cc) {
  
   let subStart = cc.substring(0, cc.length - 4).replace(/./gm, "*");
   return subStart + cc.substring(cc.length - 4, cc.length);
}
console.log(maskify("d"));