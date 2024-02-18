const myLibrary = [];

function Book() {

}

function addBookToLibrary() {
    const addBook = document.getElementById('newBook');
    const addBookForm = document.getElementById('bookEntryForm');
    addBook.addEventListener('click', () => {
        addBook.style.visibility = 'hidden';
        addBookForm.style.visibility = 'visible';
    })
}

addBookToLibrary()

function bookDisplay() {
    myLibrary.forEach((book) => {
        console.log(book)
    })
}

