
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
        const storedBooks = Store.getBooks();
    
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

    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = ` alert  alert-${className}`;
        div.appendChild(document.createTextNode(message));

      const  alertcontainer = document.querySelector('.alert-container');
      const form  = document.querySelector('#book-form');
      alertcontainer.insertBefore(div, form);

      //vanish in 3 seconds 
      setTimeout(()=>{
          document.querySelector('.alert').remove();
      },2400);

    
}
}

//UI Class: Handle UI Tasks

// Storage Class: Handles Storage
   
class Store{


    static getBooks(){
      let books;


      if(localStorage.getItem('books') === null){
          books = [];
      }
      else{
          books = JSON.parse(localStorage.getItem('books'));
      }
       console.log('books')
      return books;
    } 

    static addBook(book){
     const books = Store.getBooks();

     books.push(book);

     localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach((book, index) =>{
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        })
       localStorage.setItem('books', JSON.stringify(books));
    }
}
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
     if(title === '' || author === '' || isbn === ''){
         UI.showAlert('Please fill in all fields', 'danger');
     }

     else{
        let book = new Book(title, author, isbn);
    
     //update ui with book added
      UI.addBookToList(book);
      
      //adds book to store
      Store.addBook(book);


    //clear the ui after adding the book
     UI.clearFields();
     UI.showAlert('Book  added successfully', 'success');
     }
    

});

