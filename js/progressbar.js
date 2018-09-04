$(document).ready(function(){
    console.log("Progress bar ready!");
    /*var baselineper;
    var posttreatper;
    if (localStorage.getItem("PercentageBaseline") === null || localStorage.getItem("PercentageBaseline") === "NaN") {
        baselineper = 0;    
    }else{
        baselineper = localStorage.getItem("PercentageBaseline");
    }
    if(localStorage.getItem("PercentagePostTreatment") === null || localStorage.getItem("PercentagePostTreatment") === "NaN"){
        posttreatper = 0;
    }else{
        posttreatper = localStorage.getItem("PercentagePostTreatment");
    }
    var percentagevaser = (baselineper + posttreatper)/200;
    $("#vasercard .progress-bar").text(percentagevaser+"%");
    $("#vasercard .progress-bar").css({"width":percentagevaser+"%"});
    $("#vasercard .progress-bar").attr("aria-valuenow",percentagevaser);*/
    
    if (localStorage.getItem("PercentageMI") === null || localStorage.getItem("PercentageMI") === "NaN") {
        $("#micard .progress-bar").text("0%");
        $("#micard .progress-bar").css({"width":"0%"});
        $("#micard .progress-bar").attr("aria-valuenow","0");
    }else{
        var percentage = localStorage.getItem("PercentageMI");
        $("#micard .progress-bar").text(percentage+"%");
        $("#micard .progress-bar").css({"width":percentage+"%"});
        $("#micard .progress-bar").attr("aria-valuenow",percentage);
    }
    
    if (localStorage.getItem("PercentageOARS") === null || localStorage.getItem("PercentageOARS") === "NaN") {
        $("#oarscard .progress-bar").text("0%");
        $("#oarscard .progress-bar").css({"width":"0%"});
        $("#oarscard .progress-bar").attr("aria-valuenow","0");
    }else{
        var percentage = localStorage.getItem("PercentageOARS");
        $("#oarscard .progress-bar").text(percentage+"%");
        $("#oarscard .progress-bar").css({"width":percentage+"%"});
        $("#oarscard .progress-bar").attr("aria-valuenow",percentage);
    }
    
    if (localStorage.getItem("PercentageFocusing") === null || localStorage.getItem("PercentageFocusing") === "NaN") {
        $("#focusingcard .progress-bar").text("0%");
        $("#focusingcard .progress-bar").css({"width":"0%"});
        $("#focusingcard .progress-bar").attr("aria-valuenow","0");
    }else{
        var percentage = localStorage.getItem("PercentageFocusing");
        $("#focusingcard .progress-bar").text(percentage+"%");
        $("#focusingcard .progress-bar").css({"width":percentage+"%"});
        $("#focusingcard .progress-bar").attr("aria-valuenow",percentage);
    }
    
    if (localStorage.getItem("PercentageEvoking") === null || localStorage.getItem("PercentageEvoking") === "NaN") {
        $("#evokingcard .progress-bar").text("0%");
        $("#evokingcard .progress-bar").css({"width":"0%"});
        $("#evokingcard .progress-bar").attr("aria-valuenow","0");
    }else{
        var percentage = localStorage.getItem("PercentageEvoking");
        $("#evokingcard .progress-bar").text(percentage+"%");
        $("#evokingcard .progress-bar").css({"width":percentage+"%"});
        $("#evokingcard .progress-bar").attr("aria-valuenow",percentage);
    }
    
    if (localStorage.getItem("PercentagePlanning") === null || localStorage.getItem("PercentagePlanning") === "NaN") {
        $("#planningcard .progress-bar").text("0%");
        $("#planningcard .progress-bar").css({"width":"0%"});
        $("#planningcard .progress-bar").attr("aria-valuenow","0");
    }else{
        var percentage = localStorage.getItem("PercentagePlanning");
        $("#planningcard .progress-bar").text(percentage+"%");
        $("#planningcard .progress-bar").css({"width":percentage+"%"});
        $("#planningcard .progress-bar").attr("aria-valuenow",percentage);
    }
    
    if (localStorage.getItem("PercentageFullMIPractice") === null || localStorage.getItem("PercentageFullMIPractice") === "NaN") {
        $("#fullmicard .progress-bar").text("0%");
        $("#fullmicard .progress-bar").css({"width":"0%"});
        $("#fullmicard .progress-bar").attr("aria-valuenow","0");
    }else{
        var percentage = localStorage.getItem("PercentageFullMIPractice");
        $("#fullmicard .progress-bar").text(percentage+"%");
        $("#fullmicard .progress-bar").css({"width":percentage+"%"});
        $("#fullmicard .progress-bar").attr("aria-valuenow",percentage);
    }
});