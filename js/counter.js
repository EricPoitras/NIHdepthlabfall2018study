$(document).ready(function(){
   console.log("Counter ready;");
    
    $("#increment1").click(function(){
        var openquestion = $("#formGroupInput1").val();
        console.log(openquestion);
        openquestion++;
        console.log(openquestion);
        $("#formGroupInput1").val(openquestion);
    });
    
    $("#increment2").click(function(){
        var reflection = $("#formGroupInput2").val();
        console.log(reflection);
        reflection++;
        console.log(reflection);
        $("#formGroupInput2").val(reflection);
    });
     $("#decrement1").click(function(){
        var openquestion = $("#formGroupInput1").val();
        console.log(openquestion);
        openquestion--;
        console.log(openquestion);
        $("#formGroupInput1").val(openquestion);
    });
    
    $("#decrement2").click(function(){
        var reflection = $("#formGroupInput2").val();
        console.log(reflection);
        reflection--;
        console.log(reflection);
        $("#formGroupInput2").val(reflection);
    }); 
});