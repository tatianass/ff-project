(function () {
    'use strict';

    /**
     * Controller do header
     * @author tatiana.saturno
     */
    app.controller("HeaderController", [
        '$document',
        '$window',
        function ($document, $window) {
            var self = this;
            self.menuItems = [
                {texto: 'Home', id: "carousel"},
                {texto:'About', id: "about-us"},
                {texto:'Contact', id: "contact"},
                {texto:'Random', id: "random"},
                {texto:'Genre', id: "genre"}
            ];

            self.activeMenu = self.menuItems[0];

            self.setActive = function(menuItem) {
                self.activeMenu = menuItem;
            };
        }
    ]);
})();
