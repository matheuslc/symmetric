;(function (window, undefined) {
  'use strict';

   window.APP = window.APP || {};

   APP.init = function() {
    var el        = document.querySelector('.active-btn'),
        symmetric = document.querySelector('[data-symmetric]'),
        _active   = false;

    el.addEventListener('click', function() {
      if(_active === false ) {
        symmetric.removeAttribute('data-symmetric');
        symmetric.removeAttribute('style');
        _active = true;
      } else {
        symmetric.setAttribute('data-symmetric', 'true');
        window.SYMMETRIC.init();
        _active = false;
      }

    }, true);

   }


   APP.init();

}(window, undefined));

console.log(window.SYMMETRIC);
