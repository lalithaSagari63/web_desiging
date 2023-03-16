$(document).ready(function(){

$(".pin").on("click",function(){
$(".pin").fadeOut("1400");	
});

$("#mit").on("click",function(){
$("#mit").slideToggle("3900");	
});

$("#shit").on("click",function(){
$("#shit").slideToggle("2400");	
});

$(".lallu").on("click",function(){
$(".lallu").fadeIn("3400");	
});
 
$("#logo").on("click",function(){
$("#logo").slideToggle("4400");	
});

$("header").on({
        mouseenter: function(){
            $(this).css("background-color", "gray");
        },  
    });    
$("h3").on({
        mouseenter: function(){
            $(this).css("background-color", "blue");
        },  
    });    

$("h4").on({
        mouseenter: function(){
            $(this).css("background-color", "red");
        },  
    });    

});