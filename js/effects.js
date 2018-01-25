$(document).ready(function(){
    $("#rechts").click(function(){
        $("#bewegung-rechts").animate({left: '200px'});
    });
});

$(document).ready(function(){
    $("#hide").click(function(){
        $("#verschwinden").hide("slow");
    });
});
