/*
The purpose of jQuery is to make it much easier to use JavaScript on your website.

jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.

jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.
*/

$(document).ready(function(){

   // jQuery methods go here...
    console.log("Hello world!");
    
    
    // Modules page 
    $("#vasercard, #hrqcard, #mikatcard, #orientationcard, #micard, #oarscard, #focusingcard, #evokingcard, #changecard, #planningcard, #cliniccard, #fullmicard").hover(function(){
        $(this).css("background-color", "rgb(248, 248, 248)");
    },function(){
        $(this).css("background-color", "white");
    });
    
    $("#vasercard").click(function(){
        window.open("modules/vase-r.html","_self"); 
    });
    
    $("#hrqcard").click(function(){
        window.open("modules/hrq.html","_self"); 
    });
    
    $("#mikatcard").click(function(){
        window.open("modules/mikat.html","_self"); 
    });
    
    $("#orientationcard").click(function(){
        window.open("modules/orientation/orientation.html","_self"); 
    });
    
    $("#micard").click(function(){
        window.open("modules/mi.html","_self"); 
    });
    
    $("#oarscard").click(function(){
        window.open("modules/oars.html","_self"); 
    });
    
    $("#focusingcard").click(function(){
        window.open("modules/focusing.html","_self"); 
    });
    
    $("#evokingcard").click(function(){
        window.open("modules/evoking.html","_self"); 
    });
    
     $("#changecard").click(function(){
        window.open("modules/changetalk.html","_self"); 
    });
    
     $("#planningcard").click(function(){
        window.open("modules/planning.html","_self"); 
    });
    
     $("#cliniccard").click(function(){
        window.open("modules/clinic.html","_self"); 
    });
    
     $("#fullmicard").click(function(){
        window.open("modules/mipractice.html","_self"); 
    });
    
    // Sub-module page
    $(".list-group-navcus .list-group-item").hover(function(){
        $(this).addClass("activecus");
    },function(){
        $(this).removeClass("activecus");
    });
    
    $(".list-group-navcus .list-group-item").click(function(){
        $(".list-group-navcus .list-group-item").removeClass("activecus");
        $(".list-group-navcus .list-group-item").removeClass("activecus2"); 
    });
    
    $(".list-group-navcus .list-group-item:nth-child(1)").click(function(){
        $(".list-group-1").removeClass("invisiblecus");
        $(".list-group-1").addClass("visiblecus");
        $(".list-group-2").removeClass("visiblecus");
        $(".list-group-2").addClass("invisiblecus");
        $(".list-group-3").removeClass("visiblecus");
        $(".list-group-3").addClass("invisiblecus");
        $(".list-group-4").removeClass("visiblecus");
        $(".list-group-4").addClass("invisiblecus");
        $(this).addClass("activecus2");
    });
    
     $(".list-group-navcus .list-group-item:nth-child(2)").click(function(){
        $(".list-group-2").removeClass("invisiblecus");
        $(".list-group-2").addClass("visiblecus");
        $(".list-group-1").removeClass("visiblecus");
        $(".list-group-1").addClass("invisiblecus");
        $(".list-group-3").removeClass("visiblecus");
        $(".list-group-3").addClass("invisiblecus");
        $(".list-group-4").removeClass("visiblecus");
        $(".list-group-4").addClass("invisiblecus");
         $(this).addClass("activecus2");
    });
    
     $(".list-group-navcus .list-group-item:nth-child(3)").click(function(){
        $(".list-group-3").removeClass("invisiblecus");
        $(".list-group-3").addClass("visiblecus");
        $(".list-group-2").removeClass("visiblecus");
        $(".list-group-2").addClass("invisiblecus");
        $(".list-group-1").removeClass("visiblecus");
        $(".list-group-1").addClass("invisiblecus");
        $(".list-group-4").removeClass("visiblecus");
        $(".list-group-4").addClass("invisiblecus");
         $(this).addClass("activecus2");
    });
    
     $(".list-group-navcus .list-group-item:nth-child(4)").click(function(){
        $(".list-group-4").removeClass("invisiblecus");
        $(".list-group-4").addClass("visiblecus");
        $(".list-group-2").removeClass("visiblecus");
        $(".list-group-2").addClass("invisiblecus");
        $(".list-group-3").removeClass("visiblecus");
        $(".list-group-3").addClass("invisiblecus");
        $(".list-group-1").removeClass("visiblecus");
        $(".list-group-1").addClass("invisiblecus");
         $(this).addClass("activecus2");
    });
    
    // Module Step Page
    $(".toolbarbutton").click(function(){
        $(".toolbararea").fadeToggle(1000);
    });
    /*
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
    */
    $("#responsesubmit").click(function(){
        if (document.getElementById('ResponseTextarea').value=="" || document.getElementById('ResponseTextarea').value==undefined){
            //alert ("Please Enter a File Name");
            $(".alert-danger").delay("slow").removeClass("invisiblecus");
            $(".alert-danger").addClass("visiblecus");
        }else{
            //alert ("Your good;");
            $(".alert-success").delay("slow").removeClass("invisiblecus");
            $(".alert-success").addClass("visiblecus");
            $("#responsesubmit").addClass("invisiblecus");
            $(".alert-danger").removeClass("visiblecus");
            $(".alert-danger").addClass("invisiblecus");
            document.getElementById("ResponseTextarea").disabled = true;
            $("#next").removeClass("disabled");
        } 
    });
    
    $("#responsesubmitradioform").click(function(){
        $(".alert-success").delay("slow").removeClass("invisiblecus");
        $(".alert-success").addClass("visiblecus");
        $("#next").removeClass("disabled");
    });
    
    $(".fa-flag").click(function(){
        $(this).tooltip('hide');
        $(this).parent("#reportarea").empty();
        $("#reportarea").html("<div class='alert alert-info' role='alert'>Issue reported - thank you.</div>");
    });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})