const listOfNeighbours = [ 
["Canada", "Mexico"],
["Spain"],
["Norway", "Sweden", "Russia"],
];

for (element of listOfNeighbours) {
    for (eachCountry of element) {
        console.log(eachCountry);
    }
}