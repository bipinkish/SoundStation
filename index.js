var totalButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<totalButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        buttonInnerHTML=buttonInnerHTML.toUpperCase();
        playSound(buttonInnerHTML);
        buttonActive(buttonInnerHTML);
    })
} 


document.addEventListener("keydown",function(event){
        playSound(event.key.toUpperCase());
        buttonActive(event.key.toUpperCase());
});

function playSound(key){
    switch(key) {
        case "A":
            var audio=new Audio("sounds/1boom.wav");
            audio.play();
            break;
        case "S":
            var audio=new Audio("sounds/2kick.wav");
            audio.play();
            break; 
        case "D":
            var audio=new Audio("sounds/3clap.wav");
            audio.play();
            break;
        case "F":
            var audio=new Audio("sounds/4snare.wav");
            audio.play();
            break; 
        case "G":
            var audio=new Audio("sounds/5bass.wav");
            audio.play();
            break;
        case "H":
            var audio=new Audio("sounds/6tink.wav");
            audio.play();      
            break; 
        case "J":
            var audio=new Audio("sounds/7hihat.wav");
            audio.play();        
            break;  
        case "K":
            var audio=new Audio("sounds/8ride.wav");
            audio.play();      
            break; 
        case "L":
            var audio=new Audio("sounds/9openhat.wav");
            audio.play();        
            break;              
   
    
        default:
            break;
    }
}


function buttonActive(key){
        var activeButton=document.querySelector("."+key);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
}