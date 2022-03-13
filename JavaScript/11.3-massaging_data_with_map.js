const data = [ 
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },    
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
]

function returnNames(array) {
    let arrayName = [];
    array.forEach(element => {
        if (!arrayName.includes(element.name)) {
        arrayName.push(element.name)
        }
    });
    return arrayName;
}

function returnYangUsers(array) {
    let result = []; 
    array.forEach(element => {
        if (element.birthday.split('-')[2] >= 1990) {
            result.push(element);
        }
    });
    return result;
}

function food(array) {
    let result = {};
    array.forEach(element => {
        element.favoriteFoods.meats.forEach(meat => {
            result[meat] !== undefined ?  result[meat] += 1 : result[meat] = 1;    
        })
        element.favoriteFoods.fish.forEach(fish => {
            if (result[fish] !== undefined) {
                result[fish] += 1;
            } else {
                result[fish] = 1;    
            }
        })       
    })
return result;
}

console.log(returnNames(data));
console.log(returnYangUsers(data));
console.log(food(data));



