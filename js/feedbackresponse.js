$(document).ready(function(){
    console.log("Feedback ready!");
    
    //$(".alert-success").css("display","none");
    //$(".alert-danger").css("display","none");
    //$("#responsedisplayarea").css("display","none");
    
    $("#responsesubmitb").click(function(){
        var response = $('textarea#message').val();
        //console.log(response);
        if(response==""){
            $("#validationmessage").delay("slow").removeClass("invisiblecus");
            $("#validationmessage").addClass("visiblecus");
        }else{
            $("#validationmessage").delay("slow").removeClass("visiblecus");
            $("#validationmessage").addClass("invisiblecus");
            //console.log(response);
            $(".responsecounsel").html("<em>Counselor: </em>"+response);
        
            $("#responsedisplayarea").fadeIn("fast");
            $("#responsewritearea").fadeOut("fast");
        }
    })
});