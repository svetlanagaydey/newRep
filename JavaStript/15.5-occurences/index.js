function countOccurrences (str, char){
    let counter = 0 ;
    for(let i = 0 ; i < str.length; i ++) {
        if(str. charAt( i ) === char){
            counter += 1 ;
        }
    }
    return counter ;
}
countOccurrences ( "ini mini miny moe" , "n" );

// st.5 counter is not change hear