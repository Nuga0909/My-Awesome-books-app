import _ from 'lodash';
import './style.css';

const books = [
  // {
  //   title: 'book1',
  //   author: 'author1'
  // },
  // {
  //   title: 'book2',
  //   author: 'author2'
  // },
];

const display = document.querySelector('.display-ul');

function addBook(title, author) {
  const obj = {};
  const newTitle = title;
  const newAuthor = author;
  obj['title'] = newTitle;
  obj['author'] = newAuthor;
  books.push(obj);

  display.innerHTML += `
        <li>
          <p class="title">${title}</p>
          <p class="author">${author}</p>
          <button class="remove">Remove</button>    
        </li>
`
}

addBook('book1', 'author1');
addBook('book2', 'author2');


console.log(books);

function removeBook(id, arr) {
  console.log(arr[id]);
  arr.splice(id, 1);
}

removeBook(2, books);

console.log(books);


