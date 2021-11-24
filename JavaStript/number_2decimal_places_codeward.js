function validNumber(num){
    //let stri = num.toString();
   let re = /\d*.\d{2}/;
   const parsed = parseInt(num, 10).toFixed(2);

   
  // console.log(parsed);
    return num.match(re)? true : false;
  }
  //console.log(validNumber('2.30'));
 // console.log("2.30".toString().match(/\d*.\d{2}/)? true : false);
  console.log(validNumber(2.09870976));