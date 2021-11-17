function findSmallest(a, b, c){
    if ((a > c) && (b > c)) {
        return c;
    } else if ((a > b) && (c > b)) {
        return b;
    } else {
        return c;
    }
}

findSmallest(52,66, 2);

// findSmalest is not defined, it is mistake in function name
// wrong comparison conditions