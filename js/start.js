var audio = null;
var playbackPosition = 0;

$(document).ready(function() {

	if (audio === null) {
		audio = new Audio('resources/Song.mp3');
		audio.loop = true;

		playbackPosition = sessionStorage.getItem('playbackPosition');
		if (playbackPosition) {
			audio.currentTime = playbackPosition;
		}

		audio.play();
	}

	$(window).on('beforeunload', function() {
		sessionStorage.setItem('playbackPosition', audio.currentTime);
	});
});
function anotherPage(){
    window.location.href="animationPage1.html";
}
