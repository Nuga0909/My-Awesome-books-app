import _, { update } from "lodash";
import "./style.css";

let books = [
];

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

  display.innerHTML = '';
  books.forEach((book) => {
    display.innerHTML += `
        <li>
          <p class="title">${book.title}</p>
          <p class="author">${book.author}</p>
          <button class="remove" id="${book.id}">Remove</button>    
        </li>
    `;
  });

  // console.log(books);
}

// addBook('book1', 'author1');
// addBook('book2', 'author2');

const add = document.querySelector("#submit");

add.addEventListener("click", () => {
  addBook(inputTitle.value, inputAuthor.value);

  inputTitle.value = "";
  inputAuthor.value = "";
});



// window.addEventListener('load',  ()=> {
//   const remove = document.querySelectorAll(".remove");
//   console.log(remove);
// })

// remove.forEach((item,  index) => {
//   item.addEventListener("click", () => {
//     // const newBooks = books.splice(item.id, 1);
//     console.log(index);
//     console.log(newBooks);
//     newBooks.forEach((book) => {
//       display.innerHTML += `
//           <li>
//             <p class="title">${book.title}</p>
//             <p class="author">${book.author}</p>
//             <button class="remove" id="${book.id}">Remove</button>    
//           </li>
//       `;
//     });
//   });
// });

// console.log(books);

// function removeBook(arr) {
//   const id = books.id
//   arr.splice(id, 1);
// }

// remove.addEventListener('click', () => {
//   removeBook()
// });

display.addEventListener('click', (e) => {
  if(e.target.hasAttribute('id')) {
    const btnId = Number.parseInt(e.target.getAttribute('id'), 10);
    books = books.filter((book) => book.id !== btnId);

      // Reassign indexes
    books.forEach((book, index) => {
      book.id = index
    })

    console.log(books)
  
    display.innerHTML = '';
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


