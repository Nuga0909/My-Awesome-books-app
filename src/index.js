import _ from 'lodash';
import './style.css';

const books = [
  {
    title: 'book1',
    author: 'author1'
},
{
  title: 'book2',
  author: 'author2'
},
];

function addBook(title, author) {
  const obj = {};
  const newTitle = title;
  const newAuthor = author;
  obj['title'] = newTitle;
  obj['author'] = newAuthor;
  books.push(obj);
}

addBook('book3', 'author3');

console.log(books);

function removeBook(id, arr) {
  console.log(arr[id]);
  arr.splice(id, 1);
}

removeBook(2, books);

console.log(books);


