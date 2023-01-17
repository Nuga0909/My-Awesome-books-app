import "./style.css";

let books = [];

const display = document.querySelector(".display-ul");
const inputTitle = document.querySelector("#input-title");
const inputAuthor = document.querySelector("#input-author");
const add = document.querySelector("#submit");

// const newTitle = inputTitle.value;
// const newAuthor = inputAuthor.value;
// const id = books.length;

// const obj = {
//   title: newTitle,
//   author: newAuthor,
//   id,
// };

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = books.length++
  }

  addBook() {
    display.innerHTML = "";
  for(let i=0; i<books.length; i++) {
    display.innerHTML += `
        <li>
          <p class="title">${books[i].title}</p>
          <p class="author">${books[i].author}</p>
          <button class="remove" onclick="Books.remove(${i})">Remove</button>    
        </li>
    `;
  };

  title.value = "";
  author.value = "";
  title.focus();
  }

  removebook(index) {
    books.splice(index, 1);
    Books.addBook();
    localStorage.setItem("books", JSON.stringify(books));
  }
}

// load screen upon page refresh from local storage
window.onload = () => {
  books = JSON.parse(localStorage.getItem("books"));

  Books.addBook();
};

// add new book from add button

