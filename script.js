const addBookBtn = document.querySelector("#add-book-btn");
const addBookForm = document.querySelector('#form');
const formSubmitBtn = document.querySelector("#submit");
const statusButton = document.getElementById("statusButton")
const removeButton = document.getElementById("removeButton");
const form = document.getElementById("form-div");
const formExitButton = document.getElementById("exit");

let title;
let author;
let pages;

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.getTitle = function() {
        return title;
    }
    this.getAuthor = function() {
        return author;
    }
    this.getPages = function() {
        return pages;
    }
    this.getInfo = function() {
        return '"'+ title + '<br>' + author + "<br>" + pages + " pages";
    }
}

function addBookToLibrary() {
    title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);

    let index =  myLibrary.indexOf(newBook);

    createBookCard();
    resetForm();

    console.log(myLibrary);
}



function createBookCard() {
    const bookDiv = document.createElement('div');
    let index = myLibrary.length - 1;
    bookDiv.setAttribute('data-id', index);
    bookDiv.classList.add('book');
    bookCard.append(bookDiv);

    const bookTitle = document.createElement("p");
    bookTitle.setAttribute('id', 'bookTitle');
    let title = myLibrary[index].getTitle();
    const titleNode = document.createTextNode(title);
    bookTitle.appendChild(titleNode);
    bookDiv.appendChild(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.setAttribute('id', 'bookAuthor');
    let author = myLibrary[index].getAuthor();
    const authorNode = document.createTextNode(author);
    bookAuthor.appendChild(authorNode);
    bookDiv.appendChild(bookAuthor);

    const bookPages = document.createElement("p");
    bookPages.setAttribute('id', 'bookPages');
    let pages = myLibrary[index].getPages();
    const pagesNode = document.createTextNode(pages);
    bookPages.appendChild(pagesNode);
    bookDiv.appendChild(bookPages);

    const statusButton = document.createElement("button");
    statusButton.setAttribute('id', 'statusButton');
    statusButton.innerHTML = "Unread";
    toggleStatus(statusButton, index);
    bookDiv.append(statusButton);

    const removeButton = document.createElement("button");
    removeButton.setAttribute('class', 'removeButton');
    removeButton.innerHTML = "Remove";
    removeBook(removeButton, index);
    bookDiv.append(removeButton);
}

// const removeBtns = document.getElementsByClassName("removeButton");
// removeBook.array.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();
//         e.target.closest('div.book').remove();
//     })
// });

function removeBook() {
    let remove = document.getElementsByClassName("removeButton");
    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', function (e) {
            e.preventDefault();
            e.target.closest('div.book').remove();
        })
    }
}



function toggleStatus(button) {
    button.addEventListener('click', function onClick() {
        let status = document.getElementById('statusButton').innerHTML;
        
        if (status == "Unread") {
            button.style.backgroundColor = "green";
            button.innerHTML = "Read"
        } else {
            button.style.backgroundColor = "red";
            button.innerHTML = "Unread"
        }
    })
}

function resetForm() {
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

formExitButton.addEventListener("click", () => {
    overlay.style.display = "none";
    form.style.display = "none";
})

formSubmitBtn.addEventListener("click", () => {
    addBookToLibrary();
});