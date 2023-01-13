import _, { update } from "lodash";
import "./style.css";

let books = [];

const display = document.querySelector(".display-ul");
const inputTitle = document.querySelector("#input-title");
const inputAuthor = document.querySelector("#input-author");

function addBook() {
  const newTitle = inputTitle.value;
  const newAuthor = inputAuthor.value;
  const id = books.length;

  const obj = {
    title: newTitle,
    author: newAuthor,
    id,
  };

  books.push(obj);

  localStorage.setItem("books", JSON.stringify(books));

  display.innerHTML = "";
  books.forEach((book) => {
    display.innerHTML += `
        <li>
          <p class="title">${book.title}</p>
          <p class="author">${book.author}</p>
          <button class="remove" id="${book.id}">Remove</button>    
        </li>
    `;
  });
}

// Add New book though Add button
const add = document.querySelector("#submit");

add.addEventListener("click", () => {
  addBook(inputTitle.value, inputAuthor.value);

  inputTitle.value = "";
  inputAuthor.value = "";
});

display.addEventListener("click", (e) => {
  if (e.target.hasAttribute("id")) {
    const btnId = Number.parseInt(e.target.getAttribute("id"), 10);
    books = books.filter((book) => book.id !== btnId);

    // Reassign indexes
    books.forEach((book, index) => {
      book.id = index;
    });

    localStorage.setItem("books", JSON.stringify(books));

    display.innerHTML = "";
    books.forEach((book) => {
      display.innerHTML += `
          <li>
            <p class="title">${book.title}</p>
            <p class="author">${book.author}</p>
            <button class="remove" id="${book.id}">Remove</button>    
          </li>
      `;
    });
  }
});

// load screen upon page refresh from local storage
window.onload = () => {
  books = JSON.parse(localStorage.getItem("books"));

  display.innerHTML = "";
  books.forEach((book) => {
    display.innerHTML += `
        <li>
          <p class="title">${book.title}</p>
          <p class="author">${book.author}</p>
          <button class="remove" id="${book.id}">Remove</button>    
        </li>
    `;
  });
};
