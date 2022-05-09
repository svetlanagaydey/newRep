function solution(S) {
  //  const openBr = ['[', '{', '('];
    const closeBr = [']', '}', ')'];
    const obj = {
        ']': '[',
        ')': '(',
        '}': '{',
    }
    const stack = [];

    for (let i = 0; i < S.length; i++) {
        if (closeBr.indexOf(S[i]) != -1) {
            if (obj[S[i]] !== stack.pop()) return 0;
            } else {
            stack.push(S[i]);
            }
        }
    console.log(stack);
return 1;  
}

console.log(solution('[()()]'));
