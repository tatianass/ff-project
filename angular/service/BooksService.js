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

            $http.get('assets/json/ff-list.json').then(function(res){
                books = res.data.books;                
            });

            self.getList = function() {
                return books;
            };
        }
    ]);
})();
