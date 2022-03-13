function calcAverage (arr){
    var sum=0 ;
    for(var i = 0 ; i < arr.length; i ++) {
        sum += arr[ i ];
    }
    return sum / arr.length ;
}

calcAverage ([ 85 , 90 , 92 ]);

//st.6 mistake in logic
// st.2 must assign value to sum