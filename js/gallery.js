/*
  fadeTime is in milliseconds. It takes fadeTime to fade in,
  then fadeTime again to fade out.
  TODO Maybe take half to fade in and half to fade out?
*/

function el(id) {
  return $('#gallery-' + id);
}

var fadeTime = 500,
    imgEl = el('img'),
    gallery,
    timeout;

function doTick() {

  /* TODO:

    * Maybe set the index to a global variable, and make sure that it doesn't
    get set to what it was before, using recursion.

    * Also, maybe set gallery to have a specific order, randomly evaluated when
    window.gallery is set, and add "Back" and "Next" buttons in the HTML. Also
    add actual ids to those buttons.

  */

  var curr = gallery[~~(Math.random() * gallery.length)];

  // Fade out...
  imgEl.fadeOut(fadeTime, function() {
    imgEl.attr('src', curr.url)

    // Fade in...
    imgEl.fadeIn(fadeTime, function() {
      el('caption').text('"' + curr.caption + '"');

      // If there's already a timeout running, reset it.
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(doTick, 5000); // 5 secs
    });
  });
}

$.getJSON('json/gallery.json', function (gallery) {
  window.gallery = gallery;

  doTick();
  $('.btn').click(doTick);
});
