var fadeTime = 500, imgEl = $('#gal-img'),
i, gallery; // In milliseconds

function setI() {
  i = ~~(Math.random() * gallery.length);
}

function loop() {
  l("Executin'!");

  var curr = gallery[i];

  img.fadeOut(fadeTime, function() {
    img.src = curr.url;
    img.fadeIn(fadeTime, function() {
                                                                                l("Faded in...");
      $('#gal-caption').textContent = '"' + curr.caption + '"';
      setI();
      setTimeout(loop, 5000); // 5 secs
    });
  });
}

$.getJSON('json/gallery.json', function (gallery) {
  window.gallery = gallery;
  l($('.btn'))
});




function l(msg){console.log('[Gallery]',msg)}
