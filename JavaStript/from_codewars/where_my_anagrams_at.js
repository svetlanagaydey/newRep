function anagrams(word, words) {
  
    const map = (string) => {
      const obj = {}
      for (let chat of string) {
        obj[chat] = obj[chat] || 1;
      }
      console.log(obj)
    return obj
    }
  
    let a = Object.keys(map(word)).sort();
    let b = Object.keys(map(words)).sort();
    
    // if (a === b) return true;
    // if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}
console.log(anagrams("hello", "ehllo"))