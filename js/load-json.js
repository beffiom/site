$(document).ready(function(){
    loadArticles();
    loadBooks();
    loadAnime();
});

function loadArticles() {
     $.getJSON('https://beffiom.tech/json/articles.json', function(json) {
         var articles = json.articles;

         $.each(articles, function(key, val) {

             // Create New Article
             var html = '<br><div>';

             // Add Article Title
             html += '<span class="article-title"><a href="' + val.link + '">' + val.title + '</a></span>';

             // Add Article Date
             html += '<span class="article-date">' + val.date + '</span>';

             // Append Article to Blog Section
             html += '</div>';
             $('#blog-articles-section').append(html);
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

function loadAnime() {
    var variables = {
        userId: 834276
    };

    var userQuery = `
        query ($userId: Int) {
            User (id: $userId) {
                statistics {
                    anime {
                        count
                        episodesWatched
                        minutesWatched
                        meanScore
                    }
                    manga {
                        count
                        chaptersRead
                        meanScore
                    }
                }
            }
        }
    `;

    var animeListQuery = `
        query ($userId: Int) {
            MediaListCollection (userId: $userId, type: ANIME, sort: SCORE_DESC) {
                lists {
                    name
                    entries {
                        score
                        progress
                        media {
                            title {
                                romaji
                                english
                            }
                            episodes
                            startDate {
                                year
                            }
                            coverImage {
                                large
                            }
                            siteUrl
                        }
                    }
                }
            }
        }
    `;

    var mangaListQuery = `
        query ($userId: Int) {
            MediaListCollection (userId: $userId, type: MANGA, sort: SCORE_DESC) {
                lists {
                    name
                    entries {
                        score
                        progress
                        media {
                            title {
                                romaji
                                english
                            }
                            chapters
                            startDate {
                                year
                            }
                            coverImage {
                                large
                            }
                            siteUrl
                        }
                    }
                }
            }
        }
    `;

    var userUrl = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: userQuery,
                variables: variables
            })
    };

    // Populate html from user
    fetch(userUrl, options).then(handleResponse)
        .then(handleData)
        .then(function(json) {
        })
        .catch(handleError);

    var animeListUrl = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: animeListQuery,
                variables: variables
            })
    };

    // Populate html from animeList
    fetch(animeListUrl, options).then(handleResponse)
        .then(handleData)
        .then(function(json) {

            const watchingAnimeList = json.data.MediaListCollection.lists[4].entries;
            const completedAnimeList = json.data.MediaListCollection.lists[0].entries;
            const pausedAnimeList = json.data.MediaListCollection.lists[2].entries;
            const droppedAnimeList = json.data.MediaListCollection.lists[1].entries;

            $.each(watchingAnimeList, function(key, val){

                // Set Variables
                var name = val.media.title.english;
                if (name == null) { name = val.media.title.romaji; }
                var year = val.media.startDate.year;
                var image = val.media.coverImage.large;
                var myScore = val.score;
                if ( myScore == "0" ) { myScore = "?"; }
                var link = val.media.siteUrl;
                var episodesWatched = val.progress;
                var totalEpisodes = val.media.episodes;
                if (totalEpisodes == null) { totalEpisodes = "?"; }

                // Create Anime Item
                var html = '<div class="anime-item">';

                // Add Anime Image
                html += '<a href="' + link + '"><img src="' + image + '" alt="' + name + '"/></a>';

                // Add Anime Name
                html += '<p class="anime-name"><a href="' + link + '">' + name + '</a></p>';

                // Add Anime Year
                html += '<p class="anime-year">' + year + '</p>';

                // Add Anime Progress
                html += '<p class="anime-progress">' + episodesWatched + '/' + totalEpisodes + '</p>';

                // Add Anime Score
                html += '<p class="anime-score">' + myScore + '</p>';

                // Append Anime Item to Fave Anime Section
                html += '</div>';
                $('#watching-anime').append(html);

            });

            $.each(completedAnimeList, function(key, val){

                // Set Variables
                var name = val.media.title.english;
                if (name == null) { name = val.media.title.romaji; }
                var year = val.media.startDate.year;
                var image = val.media.coverImage.large;
                var myScore = val.score;
                if ( myScore == "0" ) { myScore = "?"; }
                var link = val.media.siteUrl;
                var episodesWatched = val.progress;
                var totalEpisodes = val.media.episodes;
                if (totalEpisodes == null) { totalEpisodes = "?"; }

                // Create Anime Item
                var html = '<div class="anime-item">';

                // Add Anime Image
                html += '<a href="' + link + '"><img src="' + image + '" alt="' + name + '"/></a>';

                // Add Anime Name
                html += '<p class="anime-name"><a href="' + link + '">' + name + '</a></p>';

                // Add Anime Year
                html += '<p class="anime-year">' + year + '</p>';

                // Add Anime Progress
                html += '<p class="anime-progress">' + episodesWatched + '/' + totalEpisodes + '</p>';

                // Add Anime Score
                html += '<p class="anime-score">' + myScore + '</p>';

                // Append Anime Item to Fave Anime Section
                html += '</div>';
                $('#completed-anime').append(html);

            });

            $.each(pausedAnimeList, function(key, val){

                // Set Variables
                var name = val.media.title.english;
                if (name == null) { name = val.media.title.romaji; }
                var year = val.media.startDate.year;
                var image = val.media.coverImage.large;
                var myScore = val.score;
                if ( myScore == "0" ) { myScore = "?"; }
                var link = val.media.siteUrl;
                var episodesWatched = val.progress;
                var totalEpisodes = val.media.episodes;
                if (totalEpisodes == null) { totalEpisodes = "?"; }

                // Create Anime Item
                var html = '<div class="anime-item">';

                // Add Anime Image
                html += '<a href="' + link + '"><img src="' + image + '" alt="' + name + '"/></a>';

                // Add Anime Name
                html += '<p class="anime-name"><a href="' + link + '">' + name + '</a></p>';

                // Add Anime Year
                html += '<p class="anime-year">' + year + '</p>';

                // Add Anime Progress
                html += '<p class="anime-progress">' + episodesWatched + '/' + totalEpisodes + '</p>';

                // Add Anime Score
                html += '<p class="anime-score">' + myScore + '</p>';

                // Append Anime Item to Fave Anime Section
                html += '</div>';
                $('#paused-anime').append(html);

            });

            $.each(droppedAnimeList, function(key, val){

                // Set Variables
                var name = val.media.title.english;
                if (name == null) { name = val.media.title.romaji; }
                var year = val.media.startDate.year;
                var image = val.media.coverImage.large;
                var myScore = val.score;
                if ( myScore == "0" ) { myScore = "?"; }
                var link = val.media.siteUrl;
                var episodesWatched = val.progress;
                var totalEpisodes = val.media.episodes;
                if (totalEpisodes == null) { totalEpisodes = "?"; }

                // Create Anime Item
                var html = '<div class="anime-item">';

                // Add Anime Image
                html += '<a href="' + link + '"><img src="' + image + '" alt="' + name + '"/></a>';

                // Add Anime Name
                html += '<p class="anime-name"><a href="' + link + '">' + name + '</a></p>';

                // Add Anime Year
                html += '<p class="anime-year">' + year + '</p>';

                // Add Anime Progress
                html += '<p class="anime-progress">' + episodesWatched + '/' + totalEpisodes + '</p>';

                // Add Anime Score
                html += '<p class="anime-score">' + myScore + '</p>';

                // Append Anime Item to Fave Anime Section
                html += '</div>';
                $('#dropped-anime').append(html);

            });
        })
        .catch(handleError);

    var mangaListUrl = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: mangaListQuery,
                variables: variables
            })
    };

    // Populate html from mangalist
    fetch(mangaListUrl, options).then(handleResponse)
        .then(handleData)
        .then(function(json) {

            const readingMangaList = json.data.MediaListCollection.lists[0].entries;
            const completedMangaList = json.data.MediaListCollection.lists[1].entries;

            $.each(readingMangaList, function(key, val){

                // Set Variables
                var name = val.media.title.english;
                if (name == null) { name = val.media.title.romaji; }
                var year = val.media.startDate.year;
                var image = val.media.coverImage.large;
                var myScore = val.score;
                if ( myScore == "0" ) { myScore = "?"; }
                var link = val.media.siteUrl;
                var chaptersRead = val.progress;
                var totalChapters = val.media.chapters;
                if (totalChapters == null) { totalChapters = "?"; }

                // Create Manga Item
                var html = '<div class="anime-item">';

                // Add Manga Image
                html += '<a href="' + link + '"><img src="' + image + '" alt="' + name + '"/></a>';

                // Add Manga Name
                html += '<p class="anime-name"><a href="' + link + '">' + name + '</a></p>';

                // Add Manga Year
                html += '<p class="anime-year">' + year + '</p>';

                // Add Manga Progress
                html += '<p class="anime-progress">' + chaptersRead + '/' + totalChapters + '</p>';

                // Add Manga Score
                html += '<p class="anime-score">' + myScore + '</p>';

                // Append Manga Item to Fave Manga Section
                html += '</div>';
                $('#reading-manga').append(html);
            });

            $.each(completedMangaList, function(key, val){

                // Set Variables
                var name = val.media.title.english;
                if (name == null) { name = val.media.title.romaji; }
                var year = val.media.startDate.year;
                var image = val.media.coverImage.large;
                var myScore = val.score;
                if ( myScore == "0" ) { myScore = "?"; }
                var link = val.media.siteUrl;
                var chaptersRead = val.progress;
                var totalChapters = val.media.chapters;
                if (totalChapters == null) { totalChapters = "?"; }

                // Create Manga Item
                var html = '<div class="anime-item">';

                // Add Manga Image
                html += '<a href="' + link + '"><img src="' + image + '" alt="' + name + '"/></a>';

                // Add Manga Name
                html += '<p class="anime-name"><a href="' + link + '">' + name + '</a></p>';

                // Add Manga Year
                html += '<p class="anime-year">' + year + '</p>';

                // Add Manga Progress
                html += '<p class="anime-progress">' + chaptersRead + '/' + totalChapters + '</p>';

                // Add Manga Score
                html += '<p class="anime-score">' + myScore + '</p>';

                // Append Manga Item to Fave Manga Section
                html += '</div>';
                $('#completed-manga').append(html);
            });
        })
        .catch(handleError);

}

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    console.log(data);
    return data;
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}
