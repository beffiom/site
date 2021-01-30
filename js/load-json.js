$(document).ready(function(){
    loadBooks();
});


function loadBooks() {
     $.getJSON('https://beffiom.tech/json/books.json', function(json) {
         var books = json.books;

         $.each(books, function(key, val) {
             // Create New Book Item
             var html = '<div class="book-item">';

             // Add Book Image
             html += '<a href="' + val.link + '"><img src="' + val.image + '" alt="' + val.title + ' by ' + val.author + '"/></a>';

             // Add Book Title
             html += '<p class="book-title"><a href="' + val.link + '">' + val.title + '</a></p>';

             // Add Book Author
             html += '<p class="book-author">' + val.author + '</p>';

             // Add Book Description
             html += '<p class="book-description">' + val.description + '</p>';

             // Append HTML to Book Item
             html += '</div>';
             $('#fave-books-section').append(html);
         })

     }).fail(function(){
         alert('Error getting books.');
     });
}

