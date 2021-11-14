const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const sameItems = [];

function compareTowArrays(arr1, arr2){
    for (elFirst of arr1) {
        for (elSecond of arr2) {
            if (elFirst === elSecond) {
                sameItems.push(elSecond)
            }
        }
    }
    if (sameItems.length == 0) {
        return false;
    }
    return sameItems;
}

console.log(compareTowArrays(food, food1))