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
                {query:"action", class:"icon-play gradient icon3x", name:"Action"},
                {query:"anthology", class:"icon-list gradient icon3x", name:"Anthology"},
                {query:"art", class:"icon-brush gradient icon3x", name:"Art"},
                {query:"autobiographies", class:"icon-user_female gradient icon3x", name:"Autobiographies"},
                {query:"biographies", class:"icon-users gradient icon3x", name:"Biographies"},
                {query:"childrens", class:"icon-dribbble gradient icon3x", name:"Childrens"},
                {query:"comics", class:"icon-git gradient icon3x", name:"Comics"},
                {query:"diary", class:"icon-sheet gradient icon3x", name:"Diary"},
                {query:"drama", class:"icon-heart_broken gradient icon3x", name:"Drama"},
                {query:"fantasy", class:"icon-node_shape gradient icon3x", name:"Fantasy"},
                {query:"history", class:"icon-hourglass gradient icon3x", name:"History"},
                {query:"horror", class:"icon-coverflow_line gradient icon3x", name:"Horror"},
                {query:"journal", class:"icon-newspaper gradient icon3x", name:"Journal"},
                {query:"mystery", class:"icon-magnifying gradient icon3x", name:"Mystery"},
                {query:"poetry", class:"icon-credit_card gradient icon3x", name:"Poetry"},
                {query:"romance", class:"icon-heart gradient icon3x", name:"Romance"},
                {query:"science-fiction", class:"icon-smartphone gradient icon3x", name:"Science Fiction"},
                {query:"travel", class:"icon-globe_black gradient icon3x", name:"Travel"}
                //{query:"sci-fi", class:"icon-tablet gradient icon3x", name:"Science Fiction"}
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
