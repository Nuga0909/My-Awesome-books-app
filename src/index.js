import "./style.css";

let Allbooks = [];

const display = document.querySelector(".display-ul");
const inputTitle = document.querySelector("#input-title");
const inputAuthor = document.querySelector("#input-author");
const add = document.querySelector("#submit");

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBook() {
    display.innerHTML = "";
    for (let i = 0; i < Allbooks.length; i++) {
      display.innerHTML += `
        <li>
          <p class="title">${Allbooks[i].title}</p>
          <p class="author">${Allbooks[i].author}</p>
          <button class="remove" onclick='Books.removeBook(${i})'>Remove</button>    
        </li>
    `;
      inputTitle.value = "";
      inputAuthor.value = "";
      inputTitle.focus();
    }
  }

  static removeBook(index) {
    Allbooks = JSON.parse(localStorage.getItem("Allbooks"));
    Allbooks.splice(index, 1);
    Books.addBook();
    localStorage.setItem("Allbooks", JSON.stringify(Allbooks));
  }
}

// load screen upon page refresh from local storage
window.onload = () => {
  if (localStorage.getItem("Allbooks")) {
    Allbooks = JSON.parse(localStorage.getItem("Allbooks"));

    Books.addBook();
  }
};

// add new book from add button
add.addEventListener("click", () => {
  const newbook = new Books(inputTitle.value, inputAuthor.value);
  Allbooks.push(newbook);
  Books.addBook();
  localStorage.setItem("Allbooks", JSON.stringify(Allbooks));
  console.log(Allbooks);
});
