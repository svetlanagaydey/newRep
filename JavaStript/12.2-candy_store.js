const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2,
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4,
        }
    ],
    cashRegister: 200,
}
function getCandy(candyStore, id){ 
    return candyStore.candies.find(element => element.id == id);     
}

function getPrice(candyStore, id){ 
    return candyStore.candies.find(element => element.id === id).price;
}

function addCandy(candyStore, name, id, price){
    candyStore.candies.push({
        'name': name,
        'id': id,
        'price': price,
        amount: 3,
    })
}
addCandy(candyStore, 'boom', '3jhj3', 4);

function buy(candyStore, id) {
    candyStore.cashRegister -= candyStore.candies.find(element => element.id === id).price;
    return candyStore.candies.find(element => element.id === id).amount--;
}


console.log(getCandy(candyStore, '5hd7y'));
console.log(getPrice(candyStore, 'as12f'));
console.log(candyStore.candies);
buy(candyStore, 'as12f');
buy(candyStore, '3jhj3');
console.log(candyStore.candies);
console.log(candyStore.cashRegister);