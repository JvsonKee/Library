const addBookBtn = document.querySelector("#addBookBtn");

let form = document.getElementById("form");

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

}

addBookBtn.addEventListener("click", () => {
    form.style.display ="block";
})

const book1 = new Book("Harry Potter", "JK Rowling", 196);
myLibrary.push(book1);

const book2 = new Book("The Name of The Wind", "Patrick Rothfuss", 562);
myLibrary.push(book2);

for (let i = 0; i < myLibrary.length; i++) {
    const div = document.createElement('div');
    div.classList.add("book");
    div.textContent = myLibrary[i].getInfo();
    bookList.append(div);
}



// function Book(title, author, pages) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;

//     this.getInfo = function() {
//         return (title + ", " + author + ", " + pages);
//     }
// }

// const book1 = new Book("Harry Potter", "JK Rowling", 196);
// const book2 = new Book("The Name of The Wind", "Patrick Rothfuss", 562);
// console.log(book1.getInfo());
// console.log(book2.getInfo());