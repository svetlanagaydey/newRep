const arr = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const arrayToObject = function(arr){
  let obj = {};
  let string = arr.join('').replace(' ', '').replace(' ', '').toLowerCase();
  
  for (let i = 0; i < string.length; i++) {
      if (obj[string[i]] !== undefined) {
        obj[string[i]] = obj[string[i]] + 1;
      } else {
      obj[string[i]] = 1;
      }
  }
  return obj;
}
console.log(arrayToObject(arr));