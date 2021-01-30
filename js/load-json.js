$(document).ready(function(){
    loadArticles();
    loadBooks();
});

function loadArticles() {
     $.getJSON('https://beffiom.tech/json/articles.json', function(json) {
         var articles = json.articles;

         $.each(articles, function(key, val) {

             // Create New Article
             var html = '<br><div>';

             // Add Article Title
             html += '<span class="post"><a href="' + val.link + '">' + val.title + '</a></span>';

             // Add Article Date
             html += '<span class="date">' + val.date + '</span>';

             // Append Article to Blog Section
             html += '</div>';
             $('#blog-posts-section').append(html);
         })

     }).fail(function(){
         alert('Error getting books.');
     });
}


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

             // Append Book Item to Fave Books Section
             html += '</div>';
             $('#fave-books-section').append(html);
         })

     }).fail(function(){
         alert('Error getting books.');
     });
}

