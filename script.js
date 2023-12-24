audiogo = new Audio('gameover.mp3');
audio = new Audio('music.mp3');
score = 0;
cross = true;
audio.play();
document.onkeydown = function(e){
    console.log("Key Code is: ",e.keyCode);
    if(e.keyCode==38){
        dino = document.querySelector(".dino");
        dino.classList.add('animateDino');
        setTimeout(()=>{
             dino.classList.remove('animateDino');
        },700);
        
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        console.log(dinox);
        dino.style.left = 112+dinox+"px";
        console.log(dino.style.left);
    }
    if(e.keyCode==37){
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinox-112+"px";
    }

}
setInterval(() => {
   dino = document.querySelector('.dino');
   gameover =  document.querySelector('.gameOver');
   obstacle =  document.querySelector('.obstacle');
   
   dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));//important thing learn
   dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));//important thing learn
   ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));//important thing learn
   oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));//important thing learn
   offsetX = Math.abs(dx-ox);
   offsetY = Math.abs(dy-oy);
   console.log(offsetX,offsetY);
   if(offsetX<93&&offsetY<52)
   {
    gameover.style.visibility = 'visible';
    obstacle.classList.remove("obstacleAni");
    audiogo.play();
    audio.pause();
    setTimeout(() => {
        audiogo.pause();
    }, 1000);
    }
   else if(offsetX<145 &&cross)
   {
    score+=1;
    updatescore(score);
    cross = false;
    setTimeout(()=>{
        cross = true;
    },1000);
     setTimeout(()=>{
        aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        console.log(aniDur);    
        newDur = aniDur-0.1;
    obstacle.style.animationDuration = newDur+'s';
    },500);
   }
}, 700);
function updatescore(score)
{
    scoreCont.innerHTML = "Your Score: "+score;
}
