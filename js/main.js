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

    var btnScrollDown = document.getElementById('scroll-down');

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

var lis = document.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
    lis[i].style.position = 'relative';
    var span = document.createElement('span');
}

var width = 150; // ширина изображения
var count = 2; // количество изображений

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

var position = 1; // текущий сдвиг влево

document.querySelector('.prev').onclick = function() {
    // сдвиг влево
    // последнее передвижение влево может быть не на 3 f yf crjkmrj jcnfytymncz
    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px';
    // alert("fefe");
};

document.querySelector('.next').onclick = function() {
    // сдвиг вправо
    // последнее передвижение вправо может быть не на 3 f yf crjkmrj jcnfytymncz
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
    // alert("fefe");
};
