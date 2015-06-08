/* Name Symmetric
 * @author Matheus Lucca do Carmo (matheuslc)
 * @description Equalize the height of yours columns.
 * @version 0.0.2
 * @license MIT
*/

;(function(window, document, undefined) {
  'use strict';

  // @namespace SYMMETRIC
  window.SYMMETRIC = window.SYMMETRIC || {};

  // Object shortcut
  var _ = SYMMETRIC;

  // Start the lib
  _.init = function() {
    var items  = _.getWatchers(),
        height = _.getMaxHeight(items);

    _.setWatchersHeight(items);
    _.setHeight(height);
  };

  /* Get all elements that will be equalized
   * @param klass {string} Class name
   * @return items {NodeList} NodeList with all elements
   */
  _.getWatchers = function(klass) {
    var item  = klass,
        items = '';

    if (typeof item === 'undefined') {
      item = '[data-symmetric-item]';
    }

    // Get all items
    items = document.querySelectorAll(item);

    return items;
  };

  /* Get the max height of all elements
   * @param list {NodeList} NodeList with all items (_.getWatchers)
   * @return lastHeight {integer} The max height value
   */
  _.getMaxHeight = function(list) {
    var heights = Array.prototype.map.call( list, function( item ) {
      return item.offsetHeight;
    });

    return Math.max.apply( Math, heights );
  };

  /* Set the height of all elements
   * @param list {NodeList} NodeList with all items (_.getWatchers)
   */
  _.setWatchersHeight = function(list) {
    Array.prototype.map.call( list, function( item ) {
      item.style.height = 'inherit';
    });

    return this;
  };

  /* Set the height of root elements
   * @param height {integer} Max height value (_.getMaxHeight())
   */
  _.setHeight = function(height) {
    Array.prototype.map.call( document.querySelectorAll('[data-symmetric]'), function( item ) {
      item.style.height = height + 'px';
    });

    return this;
  };

  document.addEventListener('DOMContentLoaded', _.init, false);

}(window, document, undefined));

