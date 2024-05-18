var buttonColours=["red","blue","green","yellow"];
var game=[];
var userClickedPattern=[];
var idx=0;
var level=0;
console.log(0.99*5);
$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress("#"+userChosenColour);
    checkAnswer(idx);
});
function nextSequence(){
    userClickedPattern=[];
    idx=0;
    document.querySelector("h1").innerHTML="Level "+level;
    c=Math.random()*5;
    c=Math.floor(c);
    var randomNumber=c;
    var randomChosenColour=buttonColours[randomNumber];
    game.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
}
function animatePress(currentColour){
    $(currentColour).addClass("pressed");
    setTimeout(function(){
        $(currentColour).removeClass("pressed");  
    },"100");
}

var started=false;
$(".start").click(()=>{
if(!started){
    $(".start").slideUp();
    nextSequence();
    started=true;
}
});
$(document).keydown(function (){
if(!started){
    nextSequence();
    started=true;
}
});
function checkAnswer(currentLevel){
    if(game[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");
        idx++;
        if(game.length===userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
            level++;
        }
    }
    else{
        level=00;
        game=[];
        userClickedPattern=[];
        started=false;
        $("h1").text("Game over restart the game press any key");
        $(".start").slideDown();
    }
}