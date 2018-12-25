
class Book
{

    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn; 
    }


}

class UI{



    static  displayBooks() {
        const storedBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '3434434'
            },

            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '47748'
            }
        ];
    
       const books = storedBooks;
       
       books.forEach((book) =>{
        UI.addBookToList(book)
       });
    }


    static addBookToList(book){
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }

    
}

//UI Class: Handle UI Tasks

// Storen Class: Handles Storage

// Event:Display Books 
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//Event: Remove a Book


//Event: Add a Book

var myform = document.querySelector('book-form');
console.log(myform.childNodes);
myform.addEventListener("submit", (e) =>{
   
});