/*
The purpose of jQuery is to make it much easier to use JavaScript on your website.

jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.

jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.
*/

$(document).ready(function(){

   // jQuery methods go here...
    console.log("Hello videocuscontrol!");
    
    //Video Control Events
    // Video
      var video = document.getElementById("video");

      // Buttons
      var playButton = document.getElementById("play-pause");
      var muteButton = document.getElementById("mute");
      var fullScreenButton = document.getElementById("full-screen");

      // Sliders
      var seekBar = document.getElementById("seek-bar");
      var volumeBar = document.getElementById("volume-bar");
    
    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
      if (video.paused == true) {
        // Play the video
        video.play();

        // Update the button text to 'Pause'
        playButton.innerHTML = "<i class='fas fa-pause'></i>";
      } else {
        // Pause the video
        video.pause();

        // Update the button text to 'Play'
        playButton.innerHTML = "<i class='fas fa-play'></i>";
      }
    });
    
    // Event listener for the mute button
    muteButton.addEventListener("click", function() {
      if (video.muted == false) {
        // Mute the video
        video.muted = true;

        // Update the button text
        muteButton.innerHTML = "<i class='fas fa-volume-up'></i>";
      } else {
        // Unmute the video
        video.muted = false;

        // Update the button text
        muteButton.innerHTML = "<i class='fas fa-volume-off'></i>";
      }
    });
    
    // Event listener for the full-screen button
    fullScreenButton.addEventListener("click", function() {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen(); // Firefox
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Chrome and Safari
      }
    });
    
    // Event listener for the seek bar
    seekBar.addEventListener("change", function() {
      // Calculate the new time
      var time = video.duration * (seekBar.value / 100);

      // Update the video time
      video.currentTime = time;
    });
    
    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", function() {
      // Calculate the slider value
      var value = (100 / video.duration) * video.currentTime;

      // Update the slider value
      seekBar.value = value;
    });
    
    // Pause the video when the slider handle is being dragged
    seekBar.addEventListener("mousedown", function() {
      video.pause();
    });

    // Play the video when the slider handle is dropped
    seekBar.addEventListener("mouseup", function() {
      video.play();
    });
    
    // Event listener for the volume bar
    volumeBar.addEventListener("change", function() {
      // Update the video volume
      video.volume = volumeBar.value;
    });
    
     document.getElementById('video').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        // What you want to do after the event
        //alert("Video finished");
        $("#video-container").fadeToggle(1000);
        setTimeout(delayresponse,1000);
    }
    
    function delayresponse(){
        $("#responsearea").delay("slow").removeClass("invisiblecus");
        $("#responsearea").addClass("visiblecus");
    }
    
   
});