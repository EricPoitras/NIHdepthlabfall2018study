$(document).ready(function(){
   console.log("Hints Ready!");
    
    //$("#hintarea").css("display","none");
    
    $("#hintbutton").click(function(){
        $("#hintarea").fadeIn("fast");
    });
});