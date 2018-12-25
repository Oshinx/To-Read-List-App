
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


    static clearFields(){
        let title = document.getElementById('title');
        let author = document.getElementById('author');
        let isbn = document.getElementById('isbn');

        title.value = "";
        author.value = "";
        isbn.value = "";
    }

    static deleteBook(e){
    if(e.classList.contains('delete')){
        e.parentElement.parentElement.remove();

      }
    
    }

    
}

//UI Class: Handle UI Tasks

// Storen Class: Handles Storage

// Event:Display Books 
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//Event: Remove a Book

document.getElementById('book-list').addEventListener('click', (e) =>{
    UI.deleteBook(e.target);
});

//Event: Add a Book

var myform = document.getElementById('book-form').addEventListener("submit", (e) =>{
    e.preventDefault();
     
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;
     
    let book = new Book(title, author, isbn);
    
    //update ui with book added
    UI.addBookToList(book);

    //clear the ui after adding the book
    UI.clearFields();

});

