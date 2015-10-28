/* @name Symmetric
 * @author Matheus Lucca do Carmo (matheuslc)
 * @description Equalize the height of yours columns.
 * @version 1.0.1
 * @license MIT
*/

;(function(window, document, undefined) {
  'use strict';

  // @namespace SYMMETRIC
  window.SYMMETRIC = window.SYMMETRIC || {};

  // Object shortcut
  var _ = SYMMETRIC;

  // Start the lib
  _.init = function(options) {
    this.items   = _.getWatchers();
    this.height  = _.getMaxHeight(this.items);

    _.setWatchersHeight(this.items);
    _.setHeight(this.height);

    if (_.isResizable()) {
      window.addEventListener('resize', _.init);
    }
  };

  /* Get all elements that will be equalized
   * @param klass {string} Class name
   * @returns items {NodeList} NodeList with all elements
   */
  _.getWatchers = function(klass) {
    if (typeof klass === 'undefined') {
      klass = '[data-symmetric-item]';
    }

    return document.querySelectorAll(klass);
  };

  /* Get the max height of all elements
   * @param list {NodeList} NodeList with all items (_.getWatchers)
   * @returns lastHeight {integer} The max height value
   */
  _.getMaxHeight = function(list) {
     _.removeOldHeight()

    var heights = Array.prototype.map.call(list, function(item) {
      return item.offsetHeight;
    });

    return Math.max.apply(Math, heights);
  };

  /* Set the height of all elements
   * @param list {NodeList} NodeList with all items (_.getWatchers)
   * @returns {This}
   */
  _.setWatchersHeight = function(list) {
    Array.prototype.map.call(list, function(item) {
      item.style.height = 'inherit';
    });

    return this;
  };

  /* Set the height of root elements
   * @param height {integer} Max height value (_.getMaxHeight())
   * @returns {This}
   */
  _.setHeight = function(height) {
    Array.prototype.map.call(
      document.querySelectorAll('[data-symmetric]'), function(item) {
        item.style.height = height + 'px';
      }
    );

    return this;
  };

  /* Remove the oldest height of the element
   * @returns {This}
   */
  _.removeOldHeight = function() {
    Array.prototype.map.call(this.items, function(item) {
        item.style.height = 'auto';
    });

    return this;
  };

  /* Check if user wants to listen resize event
   * @returns {Boolean}
   */
  _.isResizable = function() {
    return !!document.querySelector('[data-symmetric-resize]')
  };

  document.addEventListener('load', _.init, false);
}(window, document, undefined));
