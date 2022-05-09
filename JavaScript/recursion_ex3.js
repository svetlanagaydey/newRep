function fibonachi(number) {
   if (number < 2) {
        return number; 
   }
   return fibonachi(number-1) + fibonachi(number-2);
}

console.log(fibonachi(8));