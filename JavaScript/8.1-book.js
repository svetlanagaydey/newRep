let tomAdventure = {
    bookName: '',
    authorName: 'John Smith',
    publishingYear: 1998,
    pagesNumber: 333,
}

function bookProretrie(book) {
    return `The book ${book.bookName} was written by ${book.authorName} in the year ${book.publishingYear} and have ${book.pagesNumber} pages.`
}
console.log(bookProretrie(tomAdventure));