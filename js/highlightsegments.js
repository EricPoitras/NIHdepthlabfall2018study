$(document).ready(function(){
    
    console.log("highlightsegment.js ready...");
    
    $(".segcontain").mouseenter(function(){
        if($(this).hasClass("segselected")){
            $(this).css({"background-color":"yellow","cursor":"pointer"});
        }else{
            $(this).css({"background-color":"lightyellow","cursor":"pointer"});
        }
    });
    $(".segcontain").mouseleave(function(){
        if($(this).hasClass("segselected")){
            $(this).css({"background-color":"yellow"});
        }else{
            $(this).css({"background-color":"transparent"});
        }
    });
    $(".segcontain").click(function(){
        if($(this).hasClass("segselected")){
            $(this).css("background-color","transparent");
            $(this).removeClass("segselected");
        }else{
            $(this).css("background-color","yellow");
            $(this).addClass("segselected");
        }
    });
});