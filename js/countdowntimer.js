document.getElementById('video').addEventListener('ended',myHandler,false);

function startTimer(duration, display) {
        var timer = duration;
        setInterval(function () {
            //minutes = parseInt(timer / 60, 10)
            var seconds = parseInt(timer % 60, 10);

            //minutes = minutes < 10 ? "0" + minutes : minutes;
            //seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = seconds;

            if (--timer < 0) {
                timer = "0";
                document.getElementById("ResponseTextarea").disabled = true;
                $("#responsesubmit").addClass("invisiblecus");
                $(".alert-info").removeClass("invisiblecus");
                $("#next").removeClass("disabled");
            }
            
            if(timer > 0 && timer <= 9){
                    $("#time").removeClass('color-half'); 
    	           $("#time").addClass('color-empty');
            }
            else if(timer > 9 && timer <= 19){
                    $("#time").removeClass('color-full');
                    $("#time").addClass('color-half');
            }
            /*else if(timer >=0 && timer <=10){
               $("#time").removeClass('color-half'); 
    	       $("#time").addClass('color-empty');
               --timer;
            }
            else if(timer >=10 && timer <=20){
               $("#time").removeClass('color-full'); 
    	       $("#time").addClass('color-half');
               --timer;
            }*/
        }, 1000);
    }

function initializeTimer() {
        var seconds = 45;
        display = document.querySelector('#time');
        startTimer(seconds, display);
    };

// Insert this into function that toggles visibility of textbox once the video is out of view - add this before the other JS sheets

function myHandler(e) {
        // What you want to do after the event
        //alert("Video finished");
    initializeTimer();
}
