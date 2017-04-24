(function () {
    'use strict';

    /**
     * Implementing Books controller
     * @author Tatiana Saturno
     */
    app.service("BooksService", [
        '$http',
        function ($http) {
            var self = this;
            var books = {};
            var genre = {};

            $http.get('assets/json/ff-list.json').then(function(res){
                books = res.data.books;                
            });

            $http.get('assets/json/genre.json').then(function(res){
                genre = res.data.genres;                
            });

            self.getList = function() {
                return books;
            };

            self.getGenreList = function() {
                return genre;
            };
        }
    ]);
})();
