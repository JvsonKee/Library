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

    createCard();
    cardInformation(index);
    resetForm();

    console.log(myLibrary);
}

function createCard() {
    const bookDiv = document.createElement('div');
    //bookDiv.setAttribute('id', 'book');
    bookDiv.classList.add('book');
    bookCard.append(bookDiv);
}

function cardInformation(index) {
    const card = document.getElementsByClassName('book');

    for (let i = 0; i < card.length; i++) {
        if (index == i) {
            const bookTitle = document.createElement("p");
            bookTitle.setAttribute('id', 'book');
            let title = myLibrary[index].getTitle();
            const titleNode = document.createTextNode(title);
            bookTitle.appendChild(titleNode);
            card[i].appendChild(bookTitle);

            const bookAuthor = document.createElement("p");
            bookAuthor.setAttribute('id', 'bookAuthor');
            let author = myLibrary[index].getAuthor();
            const authorNode = document.createTextNode(author);
            bookAuthor.appendChild(authorNode);
            card[i].appendChild(bookAuthor);

            const bookPages = document.createElement("p");
            bookPages.setAttribute('id', 'bookPages');
            let pages = myLibrary[index].getPages();
            const pagesNode = document.createTextNode(pages);
            bookPages.appendChild(pagesNode);
            card[i].appendChild(bookPages);

            const statusButton = document.createElement("button");
            statusButton.setAttribute('id', 'statusButton');
            statusButton.innerHTML = "Unread";
            toggleStatus(statusButton, index);
            card[i].append(statusButton);

            const removeButton = document.createElement("button");
            removeButton.setAttribute('id', 'removeButton');
            removeButton.innerHTML = "Remove";
            removeBook(removeButton, index);
            card[i].append(removeButton);
        }
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

function removeBook(button, index) {
    button.addEventListener('click', function onClick() {
        myLibrary.splice(index, 1);
        let bookToRemove = document.getElementsByClassName('book');
        bookToRemove[index].remove();
        console.log(myLibrary);
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