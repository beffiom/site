var time = 75;

$(document).ready(function () {

    // Hide Faves and About On Page Load
    $("#faves-section").hide();
    $("#about-section").hide();

    // Show Blog
    $("#blog-button").on("click", function () {
        $("#main").fadeOut(time, function() {

            $("#blog-section").show();
            $("#faves-section").hide();
            $("#about-section").hide();

            $("#main").fadeIn(time);
        })
    })

    // Show About
    $("#about-button").on("click", function () {
        $("#main").fadeOut(time, function() {

            $("#blog-section").hide();
            $("#faves-section").hide();
            $("#about-section").show();

            $("#main").fadeIn(time);
        })
    })

    // Show Faves
    $("#faves-button").on("click", function () {
        $("#main").fadeOut(time, function() {

            $("#blog-section").hide();
            $("#faves-section").show();
            $("#about-section").hide();

            $("#fave-books-section").show();
            $("#fave-anime-section").hide();
            $("#fave-sites-section").hide();
            $("#fave-software-section").hide();

            $("#fave-books-button").css("background", "magenta");
            $("#fave-books-button").css("color", "#021012");

            $("#fave-anime-button").css("background", "");
            $("#fave-anime-button").css("color", "");

            $("#fave-sites-button").css("background", "");
            $("#fave-sites-button").css("color", "");

            $("#fave-software-button").css("background", "");
            $("#fave-sofware-button").css("color", "");

            $("#main").fadeIn(time);
        })
    })

    // Show Fave Books
    $("#fave-books-button").on("click", function () {
        $("#faves").fadeOut(time, function() {

            $("#fave-books-section").show();
            $("#fave-anime-section").hide();
            $("#fave-sites-section").hide();
            $("#fave-software-section").hide();

            $("#fave-books-button").css("background", "magenta");
            $("#fave-books-button").css("color", "#021012");

            $("#fave-anime-button").css("background", "");
            $("#fave-anime-button").css("color", "");

            $("#fave-sites-button").css("background", "");
            $("#fave-sites-button").css("color", "");

            $("#fave-software-button").css("background", "");
            $("#fave-sofware-button").css("color", "");

            $("#faves").fadeIn(time);
        })
    })

    // Show Fave Anime
    $("#fave-anime-button").on("click", function () {
        $("#faves").fadeOut(time, function() {

            $("#fave-books-section").hide();
            $("#fave-anime-section").show();
            $("#fave-sites-section").hide();
            $("#fave-software-section").hide();

            $("#anime").show();
            $("#manga").hide();

            $("#watching-anime").show();
            $("#completed-anime").hide();
            $("#paused-anime").hide();
            $("#dropped-anime").hide();

            $("#watching-anime-button").css("background", "magenta");
            $("#watching-anime-button").css("color", "#021012");

            $("#fave-books-button").css("background", "");
            $("#fave-books-button").css("color", "");

            $("#fave-anime-button").css("background", "magenta");
            $("#fave-anime-button").css("color", "#021012");

            $("#fave-sites-button").css("background", "");
            $("#fave-sites-button").css("color", "");

            $("#fave-software-button").css("background", "");
            $("#fave-sofware-button").css("color", "");

            $("#watching-anime-button").css("background", "magenta");
            $("#watching-anime-button").css("color", "#021012");

            $("#completed-anime-button").css("background", "");
            $("#completed-anime-button").css("color", "");

            $("#paused-anime-button").css("background", "");
            $("#paused-anime-button").css("color", "");

            $("#dropped-anime-button").css("background", "");
            $("#dropped-manga-button").css("color", "");

            $("#faves").fadeIn(time);
        })
    })

    // Show Fave Sites
    $("#fave-sites-button").on("click", function () {
        $("#faves").fadeOut(time, function() {

            $("#fave-books-section").hide();
            $("#fave-anime-section").hide();
            $("#fave-sites-section").show();
            $("#fave-software-section").hide();

            $("#fave-books-button").css("background", "");
            $("#fave-books-button").css("color", "");

            $("#fave-anime-button").css("background", "");
            $("#fave-anime-button").css("color", "");

            $("#fave-sites-button").css("background", "magenta");
            $("#fave-sites-button").css("color", "#021012");

            $("#fave-software-button").css("background", "");
            $("#fave-sofware-button").css("color", "");
    })
            $("#faves").fadeIn(time);
        })

    // Show Fave Software
    $("#fave-software-button").on("click", function () {
        $("#faves").fadeOut(time, function() {

            $("#fave-books-section").hide();
            $("#fave-anime-section").hide();
            $("#fave-sites-section").hide();
            $("#fave-software-section").show();

            $("#fave-books-button").css("background", "");
            $("#fave-books-button").css("color", "");

            $("#fave-anime-button").css("background", "");
            $("#fave-anime-button").css("color", "");

            $("#fave-sites-button").css("background", "");
            $("#fave-sites-button").css("color", "");

            $("#fave-software-button").css("background", "magenta");
            $("#fave-software-button").css("color", "#021012");

            $("#faves").fadeIn(time);
        })
    })


    // Show Anime
    $("#anime-button").on("click", function () {
        $("#anime-list").fadeOut(time, function() {
            $("#anime").show();
            $("#manga").hide();

            $("#watching-anime").show();
            $("#completed-anime").hide();
            $("#paused-anime").hide();
            $("#dropped-anime").hide();

            $("#watching-anime-button").css("background", "magenta");
            $("#watching-anime-button").css("color", "#021012");

            $("#completed-anime-button").css("background", "");
            $("#completed-anime-button").css("color", "");

            $("#paused-anime-button").css("background", "");
            $("#paused-anime-button").css("color", "");

            $("#dropped-anime-button").css("background", "");
            $("#dropped-manga-button").css("color", "");

            $("#anime-list").fadeIn(time);
        })
    })

    // Show Manga
    $("#manga-button").on("click", function () {
        $("#anime-list").fadeOut(time, function() {
            $("#anime").hide();
            $("#manga").show();

            $("#completed-manga").hide();
            $("#paused-manga").hide();
            $("#dropped-manga").hide();

            $("#reading-manga-button").css("background", "magenta");
            $("#reading-manga-button").css("color", "#021012");

            $("#completed-manga-button").css("background", "");
            $("#completed-manga-button").css("color", "");

            $("#paused-manga-button").css("background", "");
            $("#paused-manga-button").css("color", "");

            $("#dropped-manga-button").css("background", "");
            $("#dropped-manga-button").css("color", "");


            $("#anime-list").fadeIn(time);
        })
    })


    // Show Watching Anime
    $("#watching-anime-button").on("click", function () {
        $("#anime-lists").fadeOut(time, function() {

            $("#watching-anime").show();
            $("#completed-anime").hide();
            $("#paused-anime").hide();
            $("#dropped-anime").hide();

            $("#watching-anime-button").css("background", "magenta");
            $("#watching-anime-button").css("color", "#021012");

            $("#completed-anime-button").css("background", "");
            $("#completed-anime-button").css("color", "");

            $("#paused-anime-button").css("background", "");
            $("#paused-anime-button").css("color", "");

            $("#dropped-anime-button").css("background", "");
            $("#dropped-anime-button").css("color", "");

            $("#anime-lists").fadeIn(time);
        })
    })

    // Show Completed Anime
    $("#completed-anime-button").on("click", function () {
        $("#anime-lists").fadeOut(time, function() {

            $("#watching-anime").hide();
            $("#completed-anime").show();
            $("#paused-anime").hide();
            $("#dropped-anime").hide();

            $("#watching-anime-button").css("background", "");
            $("#watching-anime-button").css("color", "");

            $("#completed-anime-button").css("background", "magenta");
            $("#completed-anime-button").css("color", "#021012");

            $("#paused-anime-button").css("background", "");
            $("#paused-anime-button").css("color", "");

            $("#dropped-anime-button").css("background", "");
            $("#dropped-anime-button").css("color", "");

            $("#anime-lists").fadeIn(time);
        })
    })

    // Show Paused Anime
    $("#paused-anime-button").on("click", function () {
        $("#anime-lists").fadeOut(time, function() {

            $("#watching-anime").hide();
            $("#completed-anime").hide();
            $("#paused-anime").show();
            $("#dropped-anime").hide();

            $("#watching-anime-button").css("background", "");
            $("#watching-anime-button").css("color", "");

            $("#completed-anime-button").css("background", "");
            $("#completed-anime-button").css("color", "");

            $("#paused-anime-button").css("background", "magenta");
            $("#paused-anime-button").css("color", "#021012");

            $("#dropped-anime-button").css("background", "");
            $("#dropped-anime-button").css("color", "");

            $("#anime-lists").fadeIn(time);
        })
    })

    // Show Dropped Anime
    $("#dropped-anime-button").on("click", function () {
        $("#anime-lists").fadeOut(time, function() {

            $("#watching-anime").hide();
            $("#completed-anime").hide();
            $("#paused-anime").hide();
            $("#dropped-anime").show();

            $("#watching-anime-button").css("background", "");
            $("#watching-anime-button").css("color", "");

            $("#completed-anime-button").css("background", "");
            $("#completed-anime-button").css("color", "");

            $("#paused-anime-button").css("background", "");
            $("#paused-anime-button").css("color", "");

            $("#dropped-anime-button").css("background", "magenta");
            $("#dropped-anime-button").css("color", "#021012");

            $("#anime-lists").fadeIn(time);
        })
    })

    // Show Reading Manga
    $("#reading-manga-button").on("click", function () {
        $("#manga-lists").fadeOut(time, function() {

            $("#reading-manga").show();
            $("#completed-manga").hide();
            $("#paused-manga").hide();
            $("#dropped-manga").hide();

            $("#reading-manga-button").css("background", "magenta");
            $("#reading-manga-button").css("color", "#021012");

            $("#completed-manga-button").css("background", "");
            $("#completed-manga-button").css("color", "");

            $("#paused-manga-button").css("background", "");
            $("#paused-manga-button").css("color", "");

            $("#dropped-manga-button").css("background", "");
            $("#dropped-manga-button").css("color", "");

            $("#manga-lists").fadeIn(time);
        })
    })

    // Show Completed Manga
    $("#completed-manga-button").on("click", function () {
        $("#manga-lists").fadeOut(time, function() {

            $("#reading-manga").hide();
            $("#completed-manga").show();
            $("#paused-manga").hide();
            $("#dropped-manga").hide();

            $("#reading-manga-button").css("background", "");
            $("#reading-manga-button").css("color", "");

            $("#completed-manga-button").css("background", "magenta");
            $("#completed-manga-button").css("color", "#021012");

            $("#paused-manga-button").css("background", "");
            $("#paused-manga-button").css("color", "");

            $("#dropped-manga-button").css("background", "");
            $("#dropped-manga-button").css("color", "");

            $("#manga-lists").fadeIn(time);
        })
    })

    // Show Paused Manga
    $("#paused-manga-button").on("click", function () {
        $("#manga-lists").fadeOut(time, function() {

            $("#reading-manga").hide();
            $("#completed-manga").hide();
            $("#paused-manga").show();
            $("#dropped-manga").hide();

            $("#reading-manga-button").css("background", "");
            $("#reading-manga-button").css("color", "");

            $("#completed-manga-button").css("background", "");
            $("#completed-manga-button").css("color", "");

            $("#paused-manga-button").css("background", "magenta");
            $("#paused-manga-button").css("color", "#021012");

            $("#dropped-manga-button").css("background", "");
            $("#dropped-manga-button").css("color", "");

            $("#manga-lists").fadeIn(time);
        })
    })

    // Show Dropped Manga
    $("#dropped-manga-button").on("click", function () {
        $("#manga-lists").fadeOut(time, function() {

            $("#reading-manga").hide();
            $("#completed-manga").hide();
            $("#paused-manga").hide();
            $("#dropped-manga").show();

            $("#reading-manga-button").css("background", "");
            $("#reading-manga-button").css("color", "");

            $("#completed-manga-button").css("background", "");
            $("#completed-manga-button").css("color", "");

            $("#paused-manga-button").css("background", "");
            $("#paused-manga-button").css("color", "");

            $("#dropped-manga-button").css("background", "magenta");
            $("#dropped-manga-button").css("color", "#021012");

            $("#manga-lists").fadeIn(time);
        })
    })
});


