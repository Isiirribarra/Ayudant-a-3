$(document).ready(function(){
    var div = $(".div");

    div.mouseenter(function(){
        var idenlace = $(this).attr("id");
        $("#destacado").text(idenlace);
       $(this).fadeTo("fast", 0.5);
       
    });
    
    div.mouseleave(function(){
        $("#destacado").text("Hola");
        $(this).fadeTo("fast", 1);
    });    
    
    div.click(function(){
        var idenlace= $(this).attr("id");
        $("#lista").append(", "+idenlace)
    })

});
