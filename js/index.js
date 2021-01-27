var time = 200;

$(document).ready(function () {

    // Page Load
    $("#faves-section").hide();
    $("#about-section").hide();

    // Navigation Button Behavior
    $("#blog-button").on("click", function () {
        $("#main").fadeOut(time, function() {

            $("#blog-section").show();
            $("#faves-section").hide();
            $("#about-section").hide();

            $("#main").fadeIn(time);
        })
    })

    $("#faves-button").on("click", function () {
        $("#main").fadeOut(time, function() {

            $("#blog-section").hide();
            $("#faves-section").show();
            $("#about-section").hide();

            $("#fave-sites-section").hide();
            $("#fave-software-section").hide();

            $("#fave-books-button").css("background", "magenta");
            $("#fave-books-button").css("color", "#021012");

            $("#fave-sites-button").css("background", "");
            $("#fave-sites-button").css("color", "");

            $("#fave-software-button").css("background", "");
            $("#fave-sofware-button").css("color", "");

            $("#main").fadeIn(time);
        })
    })

    $("#about-button").on("click", function () {
        $("#main").fadeOut(time, function() {

            $("#blog-section").hide();
            $("#faves-section").hide();
            $("#about-section").show();

            $("#main").fadeIn(time);
        })
    })

    $("#fave-books-button").on("click", function () {
        $("#main").fadeOut(time, function() {

            $("#fave-books-section").show();
            $("#fave-sites-section").hide();
            $("#fave-software-section").hide();

            $("#fave-books-button").css("background", "magenta");
            $("#fave-books-button").css("color", "#021012");

            $("#fave-sites-button").css("background", "");
            $("#fave-sites-button").css("color", "");

            $("#fave-software-button").css("background", "");
            $("#fave-sofware-button").css("color", "");

            $("#main").fadeIn(time);
        })
    })

    $("#fave-sites-button").on("click", function () {
        $("#main").fadeOut(time, function() {

            $("#fave-books-section").hide();
            $("#fave-sites-section").show();
            $("#fave-software-section").hide();

            $("#fave-books-button").css("background", "");
            $("#fave-books-button").css("color", "");

            $("#fave-sites-button").css("background", "magenta");
            $("#fave-sites-button").css("color", "#021012");

            $("#fave-software-button").css("background", "");
            $("#fave-sofware-button").css("color", "");
    })
            $("#main").fadeIn(time);
        })

    $("#fave-software-button").on("click", function () {
        $("#main").fadeOut(time, function() {

            $("#fave-books-section").hide();
            $("#fave-sites-section").hide();
            $("#fave-software-section").show();

            $("#fave-books-button").css("background", "");
            $("#fave-books-button").css("color", "");

            $("#fave-sites-button").css("background", "");
            $("#fave-sites-button").css("color", "");

            $("#fave-software-button").css("background", "magenta");
            $("#fave-software-button").css("color", "#021012");

            $("#main").fadeIn(time);
        })
    })
});
