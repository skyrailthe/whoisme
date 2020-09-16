'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('klinok', 'klinok.html'),
            new Route('bokunohero', 'bokunohero.html'),
            new Route('sonicchar', 'sonicchar.html'),
            new Route('pokemon', 'pokemon.html'),
            new Route('lastseraf', 'lastseraf.html'),
            new Route('rezero', 'rezero.html'),
            new Route('overwatch', 'overwatch.html'),
            new Route('onepunchman', 'onepunchman.html'),
            new Route('naruto', 'naruto.html'),
        ]);
    }
    init();
}());

$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
});
