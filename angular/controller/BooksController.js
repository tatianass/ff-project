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
            self.booksList = [];

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
                    console.log(index);
                    self.booksList.push(books[index]);
                }
            };
        }
    ]);
})();
