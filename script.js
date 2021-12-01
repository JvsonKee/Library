const addBookBtn = document.querySelector("#add-book-btn");
const addBookForm = document.querySelector('#form');
const formSubmitBtn = document.querySelector("#submit");

const form = document.getElementById("form-div");

let title;
let author;
let pages;

let myLibrary = [];
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.getInfo = function() {
        return ('"'+ title + '"'  + ", " + author + ", " + pages + " pages");
    }
}
function addBookToLibrary() {
    title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);

    let index =  myLibrary.indexOf(newBook);
    const div = document.createElement('div');
    div.classList.add("book");
    div.textContent = myLibrary[index].getInfo();
    bookList.append(div);
    
    document.querySelector('#title').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#pages').value = "";

    overlay.style.display = "none";
    form.style.display = "none";
}

addBookBtn.addEventListener("click", () => {
    overlay.style.display = "block";
    form.style.display = "block";
})


