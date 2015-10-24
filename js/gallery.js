/*
  FADE_TIME is in milliseconds. It takes FADE_TIME to fade in,
  then FADE_TIME again to fade out.
*/

var FADE_TIME = 500,

gallery = [],
i = 0,

timeout,
playing = true,

// Only the HTML elements and classes that will be used more than once...

classes = {
  pre: {
    GLYPH: 'glyphicon-'
  }
  // Fill the rest in after the declaration
},

els = {
  SLIDE: $('#img'),
  PLAY_PAUSE: $('#play-pause')
};

classes.pre.CHEV = classes.pre.GLYPH + 'chevron-';
classes.PLAY = classes.pre.GLYPH + 'play';
classes.PAUSE = classes.pre.GLYPH + 'pause';

function pause() {
  clearTimeout(timeout);
}

function show() {
  var curr = gallery[i];

  // Fade out...
  els.SLIDE.fadeOut(FADE_TIME, function() {
    els.SLIDE.attr('src', curr.url);

    // Fade in...
    els.SLIDE.fadeIn(FADE_TIME, function() {
      $('#caption').text('"' + curr.caption + '"');

      if (playing) {
        // If there's already a timeout running, reset it.
        pause();
        timeout = setTimeout(next, 5000); // 5 secs
      }
    });
  });
}

function next() {
  if (i < gallery.length - 1) i++;
  else i = 0;
  show();
}

$.getJSON('json/gallery.json', function (data) {
  var randI, last;

  // Shuffle gallery order and stick it in window.gallery
  for (var j = 0, len = data.length; j < len; j++) {

    randI = ~~(Math.random() * data.length);
    gallery.push(data[randI]);

    // Now that we've used `data[randI]`, remove it!
    // Set the current randI to the last item, and delete the last item.
    last = data.pop();

    // length is now different
    if (randI < data.length) data[randI] = last;
  }

  next();
  $('.' + classes.pre.CHEV + 'right').click(next);

  $('.' + classes.pre.CHEV + 'left').click(function() {

    if (i > 0) i--;
    else i = gallery.length - 1;

    show();
  });

  els.PLAY_PAUSE.click(function() {
    if (playing) {
      // Pause
      els.PLAY_PAUSE.removeClass(classes.PAUSE);
      els.PLAY_PAUSE.addClass(classes.PLAY);

      playing = false;
      pause();

    } else {
      // Play
      els.PLAY_PAUSE.removeClass(classes.PLAY);
      els.PLAY_PAUSE.addClass(classes.PAUSE);

      playing = true;
      next();
    }
  });
});
