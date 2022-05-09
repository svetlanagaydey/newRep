let populations = [1200, 390, 120, 45];
let percentages = [];
const WORLD_POPULATION = 7900;

function populationPercentages(populations) {
    for (let i=0; i<populations.length; i++) {
        percentages.push((populations[i] / WORLD_POPULATION * 100).toFixed(2)); 
    }
    return percentages;
}

console.log(populationPercentages(populations));