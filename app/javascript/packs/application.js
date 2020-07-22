require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")

import "bootstrap";
import { MediaPlayer } from '../components/video';
import $ from 'jquery';
// import { Slider } from '../components/slider';

$( document ).ready(function() { $("#query").focus();

MediaPlayer();
// Slider();
// $('slideshow-container').each(function() {

// $(this)[0].oncontextmenu = function() {

// alert("We're sorry. Right-Click is not available");

// return false;
// };
//   });
});
