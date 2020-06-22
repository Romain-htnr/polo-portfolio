require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")

import "bootstrap";
import { MediaPlayer } from '../components/video';

$( document ).ready(function() { $("#query").focus(); });

MediaPlayer();
