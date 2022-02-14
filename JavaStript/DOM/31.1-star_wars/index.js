
const url = 'https://swapi.dev/api/people/';

fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const arr = createArray(data.results);
            console.log(arr);

          //  console.log(data.results);
        })
        console.log('in');

console.log('helo');


function createArray(array) {
    let result = [];
    for (el of array) {
        const object = {};
        object.name = el.name;
        object.hair_color = el.hair_color;
        object.height = el.height;
        let planetUrl = el.homeworld;
        const objPlanet = async function() {
            return fetch(planetUrl)
            .then((res) => res.json())
            .then((response) => response.name); }
                
        
        result.push(object);
    }
    return result;
}
