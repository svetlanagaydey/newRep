// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']


const allAnagrams = (word, array) => {
    let result = [];
    for (let el of array) {
        if (word.split('').sort().join() === el.split('').sort().join())
        result.push(el);
    }
    return result
}

console.log(allAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));