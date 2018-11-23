window.onscroll = function showHeader () {
    var header = document.querySelector('#right_header');

    if(window.pageYOffset > 320) {
        header.classList.add('nav_fixed');
    }
    else
        header.classList.remove('nav_fixed');
};
(function() {
    'use strict';

    var btnScrollDown = document.querySelector('#scroll-down');

    function scrollDown() {
        var windowCoords = document.documentElement.clientHeight;
        (function scroll() {
            if (window.pageYOffset < windowCoords) {
                window.scrollBy(0, 10);
                setTimeout(scroll, 0);
            }
            if (window.pageYOffset > windowCoords) {
                window.scrollTo(0, windowCoords);
            }
        })();
    }

    btnScrollDown.addEventListener('click', scrollDown);
})();
