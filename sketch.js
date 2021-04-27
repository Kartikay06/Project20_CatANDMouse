var bgImg,catImg,mouseImg;
var cat,mouse;
var catCollideImg,mouseCollideImg;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    mouseImg1=loadAnimation("images/mouse4.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catCollideImg=loadAnimation("images/cat4.png");
    mouseCollideImg=loadAnimation("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat = createSprite(870,600);
     cat.addAnimation("catSleeping",catImg1)
     cat.scale=0.2;
     mouse = createSprite(200,600);
     mouse.addAnimation("mousestanding",mouseImg1)
     mouse.scale=0.1;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width )/2){
        cat.velocityX=0;
        cat.addAnimation("catCollided",catCollideImg);
        cat.changeAnimation("catCollided");
        cat.x=300
        cat.scale=0.2;
        mouse.velocityX=0;
        mouse.addAnimation("mouseCollided",mouseCollideImg);
        mouse.changeAnimation("mouseCollided");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
   // cat.frameDelay=25;
    cat.velocityX=-5;
}

}
