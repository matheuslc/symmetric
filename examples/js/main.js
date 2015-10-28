;(function (window, undefined) {
  'use strict';

   window.APP = window.APP || {};

   APP.init = function() {
    var el        = document.querySelector('.active-btn'),
        symmetric = document.querySelector('[data-symmetric]'),
        _active   = false;

    el.addEventListener('click', function() {
      if (_active) {
        symmetric.removeAttribute('style');
        el.innerHTML = 'Activate Symmetryc!';
        _active = false;
      } else {
        el.innerHTML = 'Deactivate Symmetryc!';
        window.SYMMETRIC.init();
        _active = true;
      }
    }, true);
   }

   APP.init();
}(window, undefined));
