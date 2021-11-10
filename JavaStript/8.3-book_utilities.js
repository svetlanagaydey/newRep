let basni = {
    name: 'Basni',
    author: 'Pushkin',
    year: 2015,
}
let stihi = {
    name: 'Stihi',
    author: 'Shevchenko',
    year: 2016,
}
let bookUtils = {
    getFirstPublished(book1, book2) {
       if (book1.year < book2.year) {
           return book1;
       }
       return book2
    },
    setNewEdition(book, year) {
        book.latestEdition = year;
    },
    setLanguage(book, leng) {
        book.language = leng;
    },
    setTranslation(book, leng, translator) {
        book.translation = {
            language: leng,
            translator: translator,
        }
    },
    setPublisher(book, name, loc) {
        book.publisher = {
            name: name,
            location: loc,
        }
    },
    isSamePublisher(book1, book2) {
        return ((book1.publisher.name == book2.publisher.name) && (book1.publisher.location == book2.publisher.location));
    }
};
console.log(bookUtils.getFirstPublished(basni, stihi));

bookUtils.setNewEdition(basni, 2019);
bookUtils.setLanguage(basni, 'russion');
console.log(basni);
bookUtils.setTranslation(basni, 'spanish', 'Sidorov');
bookUtils.setPublisher(basni, 'New Publishing House', 'Tel-Aviv');
bookUtils.setPublisher(stihi, 'New Publishing House', 'Tel-Aviv')

console.log(basni);
console.log(stihi);
console.log(bookUtils.isSamePublisher(basni, stihi));




