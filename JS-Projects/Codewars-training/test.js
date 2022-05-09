

function validateWord(s)
{
  let str = s.toLowerCase();
  let obj = {};
  for (let i=0; i < str.length; i++) { 
      if (obj[str[i]] !== undefined) {
      obj[str[i]] = obj[str[i]] + 1;
      } else {
      obj[str[i]] = 1;
      }
  }
  // console.log(obj);

  let arrayCount = Object.values(obj);
  // console.log(arrayCount);

  var k = arrayCount[0];
  for (var i = 0; i < arrayCount.length; i++) {
      while(k!==arrayCount[i]){
          return false;
      }
  }
  return true;
}
console.log(validateWord('abc:abc'))


