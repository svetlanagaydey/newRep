function countryToLiveIn (language, isIsland, population, country) {

    let usa = ['english', false, 360, 'USA'];
    let unitedKingdom = ['english', true, 200, 'United Kingdom'];
    let france = ['french', false, 70, 'France'];
    
    let countris = [usa, unitedKingdom, france]

    for (let i = 0; i < countris.length; i++) {
            console.log(`${countris[i][0]} ${countris[i][1]} ${countris[i][2]}`)

        if ((language == countris[i][0]) && (isIsland == countris[i][1]) && (population == countris[i][2])) {
            return `You should live in ${country}`;
        } 
    }    
    return `${country} does not meet your criteria`;
}
console.log(countryToLiveIn('french', false, 90, 'France'));
