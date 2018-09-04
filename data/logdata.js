// Data logged for research purposes - stored in server, not retrieved...

// Variables
var logdata;

var docurl = '';
var d = '';
var n = '';

var docheight = '';
var docwidth = '';
var deviceheight = '';
var devicewidth = '';
var bodyheight = '';
var bodywidth = '';
var pagexoffset = '';
var pageyoffset = '';

var counter = 0;
var timer = 0;

// Functions

//Session identifier
function setsessionid(){
    if (sessionStorage.getItem("sessionid") === null) {
        var sessionid = Math.floor(Math.random()*1000000000001);
        sessionStorage.sessionid = sessionid;
    } 
}

//Setting document url
function setvariables(){
    //Get document url
    docurl = document.URL;
    //Get timestamp
    d = new Date();
    n = d.toUTCString();
}

//Setting screen variables
function setscreenvariables(){
    //Viewport size
    docheight = document.documentElement.clientHeight;
    docwidth = document.documentElement.clientWidth;
    //Device size
    deviceheight = window.screen.height;
    devicewidth = window.screen.width;
    //Document size
    bodyheight = document.body.clientHeight;
    bodywidth = document.body.clientWidth;
    //Pixel number scrolled from upper left corner of the document, horizontally and vertically
    pagexoffset = window.pageXOffset;
    pageyoffset = window.pageYOffset;
}

//Counter of logged events
function incrementcounter(){
    //Set counter
    counter += 1;
}

function settimer(){
    timer += 0.1;
}

setInterval("settimer()", 100);

function refreshloggervalues(){
    setsessionid();
    setvariables();
    setscreenvariables();
    incrementcounter();
}

// Data Logging Function
function datalogger(categorylabel, eventlabel){
    
    var newitem = {
        session: sessionStorage.sessionid,
        timestamp: n,
        timer: timer,
        counter: counter,
        page: docurl,
        docheight: docheight,
        docwidth: docwidth,
        deviceheight: deviceheight,
        devicewidth: devicewidth,
        bodyheight: bodyheight,
        bodywidth: bodywidth,
        pagexoffset: pagexoffset,
        pageyoffset: pageyoffset,
        category: categorylabel,
        event: eventlabel
    };
    
    //localStorage.sessionlog = JSON.stringify(newitem);

    if(typeof serverintegration !== 'undefined' && serverintegration){
        ep.getFunctionAsObjectJSON(8803,{'jsondata':JSON.stringify(newitem)},function(json){
            console.log("Sent Log Data to Server");
            })
    }
}

// Event Handlers
$(document).on("load",function(){
    refreshloggervalues();
    datalogger("NavigationEvent","DocumentLoad");
});

$(document).on("unload",function(){
    refreshloggervalues();
    datalogger("NavigationEvent","DocumentUnload");
});

$(document).on("click","*",function(){
    var element = $(this).html().replace(/\r?\n|\r|\s/g,"");
    var elementdescription = element.substring(0,500);
    refreshloggervalues();
    datalogger("ClickEvent",elementdescription);
});

$(document).on("dblclick","*",function(){
    var element = $(this).html().replace(/\r?\n|\r|\s/g,"");
    var elementdescription = element.substring(0,500);
    refreshloggervalues();
    datalogger("DBLClickEvent",elementdescription);
});

$(document).on("contextmenu","*",function(){
    var element = $(this).html().replace(/\r?\n|\r|\s/g,"");
    var elementdescription = element.substring(0,500);
    refreshloggervalues();
    datalogger("ContextMenu",elementdescription);
});

$(document).on("mouseenter","*",function(){
    var element = $(this).html().replace(/\r?\n|\r|\s/g,"");
    var elementdescription = element.substring(0,500);
    refreshloggervalues();
    datalogger("MouseEnter",elementdescription);
});

$(document).on("mouseleave","*",function(){
    var element = $(this).html().replace(/\r?\n|\r|\s/g,"");
    var elementdescription = element.substring(0,500);
    refreshloggervalues();
    datalogger("MouseLeave",elementdescription);
});

$(document).on("touchstart","*",function(){
    var element = $(this).html().replace(/\r?\n|\r|\s/g,"");
    var elementdescription = element.substring(0,500);
    refreshloggervalues();
    datalogger("TouchStart",elementdescription);
});

$(document).on("touchend","*",function(){
    var element = $(this).html().replace(/\r?\n|\r|\s/g,"");
    var elementdescription = element.substring(0,500);
    refreshloggervalues();
    datalogger("TouchEnd",elementdescription);
});

$(document).on("touchenter","*",function(){
    var element = $(this).html().replace(/\r?\n|\r|\s/g,"");
    var elementdescription = element.substring(0,500);
    refreshloggervalues();
    datalogger("TouchEnter",elementdescription);
});

$(document).on("touchleave","*",function(){
    var element = $(this).html().replace(/\r?\n|\r|\s/g,"");
    var elementdescription = element.substring(0,500);
    refreshloggervalues();
    datalogger("TouchLeave",elementdescription);
});

$(document).on("scroll",function(){
    refreshloggervalues();
    datalogger("Scroll","N/A");
});

$(window).on("resize",function(){
    refreshloggervalues();
    datalogger("Resize","N/A");
});

$(document).on("change paste keyup","*",function(){
    var elementvalue = $(this).val().replace(/\r?\n|\r|\s/g,"");
    var elementdescription = elementvalue.toString().substring(0,500);
    refreshloggervalues();
    datalogger("InputEvent",elementdescription);
});
