function MediaPlayer () {

 const video = jQuery('#video').get()[0];

  video.addEventListener('loadeddata', function() {
      video.play();
  });

  video.addEventListener('pause', function() {
      video.play();
  });
}

export { MediaPlayer } ;
