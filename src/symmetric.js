/* Name Symmetric
 * @author Matheus Lucca do Carmo (matheuslc)
 * @description Equalize the height of yours columns.
 * @version 0.0.1
 * @license MIT
*/


;(function(window, undefined) {

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

  }

  /* Get all elements that will be equalized
   * @param item {string} Class name
   * @return items {NodeList} NodeList with all elements
   */
  _.getWatchers = function(item) {

    var item  = item,
        items = '';

    if(typeof item === 'undefined') {
      item = '[data-symmetric-item]';
    }

    // Get all items
    items = document.querySelectorAll(item);

    return items;

  }

  /* Get the max height of all elements
   * @param list {NodeList} NodeList with all items (_.getWatchers)
   * @return lastHeight {integer} The max height value
   */
  _.getMaxHeight = function(list) {
    var size       = list.length,
        lastHeight = 0,
        i          = 0,
        auxHeight  = 0;

    for(i; i < size; i++) {
      auxHeight = list[i].offsetHeight;

      if(lastHeight < auxHeight ) {
        lastHeight = auxHeight;
      }

    }

    return lastHeight;

  }

  /* Set the height of all elements
   * @param list {NodeList} NodeList with all items (_.getWatchers)
   */
  _.setWatchersHeight = function(list) {
    var size = list.length,
        i    = 0;

    for(i; i < size; i++) {
      list[i].style.height = 'inherit';
    }

  }

  /* Set the height of root elements
   * @param height {integer} Max height value (_.getMaxHeight())
   */
  _.setHeight = function(height) {
    var items = document.querySelectorAll('[data-symmetric]'),
        i     = 0,
        size  = items.length;

    for(i; i < size; i++) {
      items[i].style.height = height + 'px';
    }

  }

  _.init();

}(window, undefined));

