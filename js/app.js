'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('klinok', 'klinok.html'),
            new Route('bokunohero', 'bokunohero.html'),
            new Route('sonicchar', 'sonicchar.html')


        ]);
    }
    init();
}());
