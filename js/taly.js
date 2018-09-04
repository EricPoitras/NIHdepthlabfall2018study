var countopen = 0;
var countaffirm = 0;
var countreflect = 0;
var countsum = 0;

function updatecount(){
    $("#valueopen").text(countopen);
    $("#valueaffirm").text(countaffirm);
    $("#valuereflect").text(countreflect);
    $("#valuesum").text(countsum);
}

$(document).ready(function(){
    console.log("taly.js ready...");
    
    $("#upopen").click(function(){
        countopen++;
        updatecount();
    });
    $("#downopen").click(function(){
        countopen--;
        updatecount();
    });
    $("#upaffirm").click(function(){
        countaffirm++;
        updatecount();
    });
    $("#downaffirm").click(function(){
        countaffirm--;
        updatecount();
    });
    $("#upreflect").click(function(){
        countreflect++;
        updatecount();
    });
    $("#downreflect").click(function(){
        countreflect--;
        updatecount();
    });
    $("#upsum").click(function(){
        countsum++;
        updatecount();
    });
    $("#downsum").click(function(){
        countsum--;
        updatecount();
    });
});