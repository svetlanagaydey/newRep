function longestConsec(strarr, k) {
    if ((strarr.length == 0) || (k <= 0) || (k >= strarr.length)) {
      return '';
    }
      let concatObj = {};
    
      for (let i=0; i<strarr.length-k+1; i++) {
          let slicedArray = strarr.slice(i, i+k);
          let sliceItem = slicedArray.reduce((prev, cur) => prev + cur);
          concatObj[sliceItem] = sliceItem.length;
      }
    let maxLength = Math.max(...Object.values(concatObj));
    return Object.keys(concatObj).find(key => concatObj[key] === maxLength);
  }

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));