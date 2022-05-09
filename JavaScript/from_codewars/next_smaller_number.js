// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 

function nextSmaller(n) {
    
    const fun = (n) => {
        return n.toString().split('').sort().join('').replace(/^(0+)([1-9])/, '$2$1');
    }
    let min = fun(n)
    
    for (let i = n - 1; i >= min; i--) {
        if (fun(i) === min) {
            return i
        }
    }
    return -1;
  }
  console.log(nextSmaller(28172));