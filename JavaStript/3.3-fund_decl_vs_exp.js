const WORLD_POPULATION = 7900;
let populationChina = 1441;
let populationUsa = 339.5;
let populationUkraine = 45;

function percentageOfWorld1 (population) {
    return (population / WORLD_POPULATION * 100).toFixed(1);
}
console.log(percentageOfWorld1(populationChina));
console.log(percentageOfWorld1(populationUsa));
console.log(percentageOfWorld1(populationUkraine));  // for Ukraine

const percentageOfWorld2 = population => (population/WORLD_POPULATION*100).toFixed(2);

console.log(percentageOfWorld2(populationChina));
console.log(percentageOfWorld2(populationUsa));
console.log(percentageOfWorld2(populationUkraine));



