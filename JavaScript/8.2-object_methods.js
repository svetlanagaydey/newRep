
let mycountry = {
    country: 'Ukraine',
    capital: 'Kyiv',
    language: 'ukrainian',
    population: 44,
    neighbours: 4,
    describe: function () {
        console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours} neighbouring countries and a capital called ${this.capital}.`);
    },
    isIslend: function() {
        console.log( this.neighbours == 0 ? true : false)
      this.neighbours == 0 ? true : false;
    },
 }

mycountry.describe();
mycountry.isIslend();
console.log(mycountry);
