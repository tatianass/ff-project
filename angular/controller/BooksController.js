(function () {
    'use strict';

    /**
     * Implementing Books controller
     * @author Tatiana Saturno
     */
    app.controller("BooksController", [
        'BooksService',
        function (BooksService) {
            var self = this;
            self.listLimit = 10;
            self.booksList = [];
            self.genresList = [];
            self.genreSelected = false;
            self.genres = [
                {query:"20th-century", name:"20th-century"},
                {query:"21st-century", name:"21st-century"},
                {query:"3-stars", name:"3-stars"},
                {query:"4-stars", name:"4-stars"},
                {query:"5-stars", name:"5-stars"},
                {query:"action", name:"Action"},
                {query:"adult", name:"Adult"},
                {query:"adventure", name:"Adventure"},
                {query:"age-gap", name:"Age-gap"},
                {query:"anthology", name:"Anthology"},
                {query:"art", name:"Art"},
                {query:"audiobook", name:"Audiobook"},
                {query:"autobiography", name:"Autobiography"},
                {query:"bdsm", name:"BDSM"},
                {query:"biography", name:"Biography"},
                {query:"businesswoman", name:"Businesswoman"},
                {query:"celebrity", name:"Celebrity"},
                {query:"classics", name:"Classics"},
                {query:"college", name:"College"},
                {query:"comedy", name:"Comedy"},
                {query:"comics", name:"Comics"},
                {query:"coming-of-age", name:"Coming-of-age"},
                {query:"coming-out", name:"Coming-out"},
                {query:"contemporary", name:"Contemporary"},
                {query:"crime", name:"Crime"},
                {query:"crime-mystery", name:"Crime-mystery"},
                {query:"criminal", name:"Criminal"},
                {query:"dark", name:"Dark"},
                {query:"detective", name:"Detective"},
                {query:"disability", name:"Disability"},
                {query:"diversity", name:"Diversity"},
                {query:"drama", name:"Drama"},
                {query:"dystopian", name:"Dystopian"},
                {query:"ebook", name:"Ebook"},
                {query:"erotica", name:"Erotica"},
                {query:"family", name:"Family"},
                {query:"fantasy", name:"Fantasy"},
                {query:"favorites", name:"Favorites"},
                {query:"favorite-series", name:"Favorite-series"},
                {query:"fiction", name:"Fiction"},
                {query:"friendship", name:"Friendship"},
                {query:"historical", name:"Historical"},
                {query:"horror", name:"Horror"},
                {query:"humor", name:"Humor"},
                {query:"kids", name:"Kids"},
                {query:"law-enforcement", name:"Law-enforcement"},
                {query:"magic", name:"Magic"},
                {query:"medical", name:"Medical"},
                {query:"memoir", name:"Memoir"},
                {query:"military", name:"Military"},
                {query:"mystery", name:"Mystery"},
                {query:"no-for-kids", name:"No-for-kids"},
                {query:"non-fiction", name:"Non-fiction"},
                {query:"paranormal", name:"Paranormal"},
                {query:"poetry", name:"Poetry"},
                {query:"politics", name:"Politics"},
                {query:"psychology", name:"Psychology"},
                {query:"relationships", name:"Relationships"},
                {query:"religion", name:"Religion"},
                {query:"rich-girl-poor-girl", name:"Rich-girl-poor-girl"},
                {query:"school", name:"School"},
                {query:"science-fiction", name:"Science-fiction"},
                {query:"series", name:"Series"},
                {query:"shapeshifters", name:"Shapeshifters"},
                {query:"short-stories", name:"Short-stories"},
                {query:"stand-alone", name:"Stand-alone"},
                {query:"supernatural", name:"Supernatural"},
                {query:"suspense", name:"Suspense"},
                {query:"thriller", name:"Thriller"},
                {query:"toaster-oven", name:"Toaster-oven"},
                {query:"trans", name:"Trans"},
                {query:"urban-fantasy", name:"Urban-fantasy"},
                {query:"vampires", name:"Vampires"},
                {query:"werewolves", name:"Werewolves"},
                {query:"young-adult", name:"Young-adult"}
            ];
            self.randomIntFromInterval = function(min,max){
                return Math.floor(Math.random()*(max-min+1)+min);
            };

            self.generateList = function() {
                self.booksList = [];
                var books = BooksService.getList();
                var min = 0;
                var max = books.length - 1;

                for(var i=0; i<10;i++){
                    var index = self.randomIntFromInterval(min, max);
                    self.booksList.push(books[index]);
                }
            };

            self.setGenre = function(genre){
                self.genresList = BooksService.getGenreList();
                self.genresList = self.genresList[genre.query];
                self.genreSelected = true;
            };
        }
    ]);
})();
