
const url = 'https://swapi.dev/api/people/';

fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const arr = createArray(data.results);
            console.log(arr);


            console.log(data.results);
        })
        // .then((data.characters) => console.log(''))
        console.log('in');

console.log('helo');


function createArray(array) {
    let result = [];
    for (el of array) {
        const object = {};
        object.name = el.name;
        object.hair_color = el.hair_color;
        object.height = el.height;
        object.planet = el.homeworld;
        result.push(object);
    }
    return result;
}