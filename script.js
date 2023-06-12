const addBookBtn = document.querySelector("#add-book-btn");
const addBookForm = document.querySelector('#form');
const formSubmitBtn = document.querySelector("#submit");
const statusButton = document.getElementById("status-button")
const form = document.getElementById("form-div");
const formExitButton = document.getElementById("exit");

let removeButtons;
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
        return "Title: " + title + ", Author: " + author + ", Pages: " + pages;
    }
}

function addBookToLibrary() {
    title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    let status = document.querySelector('#checkbox').checked;
    console.log({status})
    
    let newBook = new Book(title, author, pages);
    checkDuplicates(newBook);

    myLibrary.push(newBook);

    createBookCard(status);
    resetForm();

    console.log(myLibrary);
}

function createBookCard(status) {
    const bookDiv = document.createElement('div');
    let index;
    if (myLibrary.indexOf.length == 0) {
        index = 0;
    } else {
        index = myLibrary.length - 1;
    }
    bookDiv.setAttribute('data-index', index);
    bookDiv.classList.add('book');
    let bookCard = document.querySelector('#book-card');
    bookCard.append(bookDiv);

    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('id', 'title-container');
    bookDiv.appendChild(titleContainer);

    const bookTitle = document.createElement("p");
    bookTitle.setAttribute('id', 'bookTitle');
    let title = myLibrary[index].getTitle();
    const titleNode = document.createTextNode('"' + title + '"');
    bookTitle.appendChild(titleNode);
    titleContainer.appendChild(bookTitle);
    resizeFont(bookTitle, titleContainer);

    const bookAuthor = document.createElement("p");
    bookAuthor.setAttribute('id', 'bookAuthor');
    let author = myLibrary[index].getAuthor();
    const authorNode = document.createTextNode(author);
    bookAuthor.appendChild(authorNode);
    bookDiv.appendChild(bookAuthor);

    const bookPages = document.createElement("p");
    bookPages.setAttribute('id', 'bookPages');
    let pages = myLibrary[index].getPages();
    const pagesNode = document.createTextNode(pages + " pages");
    bookPages.appendChild(pagesNode);
    bookDiv.appendChild(bookPages);

    const statusButton = document.createElement("button");
    statusButton.setAttribute('id', 'status-button');
    if (status == false) {
        statusButton.setAttribute('data-toggle-status', "unread");
        statusButton.innerHTML = "Unread";
    } else {
        statusButton.setAttribute('data-toggle-status', "read");
        statusButton.innerHTML = "Read";
    }
    bookDiv.append(statusButton);
    toggleStatus(statusButton);

    const removeButton = document.createElement("button");
    removeButton.setAttribute('class', 'remove-button');
    removeButton.setAttribute('data-btn-index', index);
    removeButton.innerHTML = "Remove";
    bookDiv.append(removeButton);
    removeButtonListener(removeButton);
}

function removeButtonListener(button) {
    button.addEventListener('click', () => {
        button.closest('.book').remove();
        let btnIndex = button.getAttribute('data-btn-index');
        shiftList(removeButtons, btnIndex, 'data-btn-index', '.remove-button');
        myLibrary.splice(btnIndex, 1);
        console.log(myLibrary);
    })
}

function shiftList(list, index, attribute, clazz) {
    list = document.querySelectorAll(clazz);
        for (let i = index; i < list.length; i++) {
            list[i].setAttribute(attribute, i);
        }
}

function toggleStatus(button) {
    button.addEventListener('click', () => {
        let status = button.innerHTML;
        
        if (status == "Unread") {
            button.innerHTML = "Read"
            button.setAttribute('data-toggle-status', 'read');
        } else {
            button.innerHTML = "Unread"
            button.setAttribute('data-toggle-status', 'unread');
        }
    })
}

function resizeFont(input, container) {
    let fontSize = window.getComputedStyle(input).fontSize;
    fontSize = parseFloat(fontSize);
    
    while (input.clientHeight >= container.clientHeight) {
        fontSize--;
        input.style.fontSize = fontSize + 'px';
    }
}

function checkDuplicates(book) {
    // if (myLibrary.includes(book.getInfo())) {
    //     alert("Library already contains this");
    //     return;
    // }
    alert(book.getInfo());
}
function resetForm() {
    document.querySelector('#title').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#pages').value = "";
    document.querySelector('#checkbox').checked = false;

    overlay.style.display = "none";
    form.style.display = "none";
}

addBookBtn.addEventListener("click", () => {
    overlay.style.display = "block";
    form.style.display = "block";
})

formExitButton.addEventListener("click", () => {
    resetForm();
    overlay.style.display = "none";
    form.style.display = "none";
})

formSubmitBtn.addEventListener("click", () => {
    addBookToLibrary();
});
