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
    this.id = Allbooks.length;
  }

  static addBook() {
    display.innerHTML = "";
    for (let i = 0; i < Allbooks.length; i++) {
      display.innerHTML += `
        <li>
          <p class="title">${Allbooks[i].title}</p>
          <p class="author">${Allbooks[i].author}</p>
          <button class="remove" id="${i}">Remove</button>    
        </li>
    `;
      inputTitle.value = "";
      inputAuthor.value = "";
      inputTitle.focus();
    }
  }

  static removeBook(e) {
    if (e.target.hasAttribute("id")) {
      const btnId = Number.parseInt(e.target.getAttribute("id"), 10);
      Allbooks = Allbooks.filter((book) => book.id !== btnId);
  
      // Reassign indexes
      Allbooks.forEach((book, index) => {
        book.id = index;
      });
  
      localStorage.setItem("Allbooks", JSON.stringify(Allbooks));
  
      Books.addBook();
    }
    
    
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
  window.alert('New book added successfully!')
});

// remove a book
display.addEventListener("click", (e) => {
 Books.removeBook(e);
 window.alert('Book deleted successfully!')
});