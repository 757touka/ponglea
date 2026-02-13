// global
//ball
var ballx;
var bally;
var ballWidh = 15;
var ballHeight = 15;
var ballSpeed = 3;
var ballDirectionx = -1;
var ballDirectiony = -1;


// player 1
var p1x = 30;
var p1y = 250;

//player 2

var p2x = 870;
var p2y = 250;

//playersize
var playerWidth =20;
var playerHeight = 100;
var pSpeed = 5;


//scorebord
var p1Score = 0;
var p2Score = 0;

function setup () {
    createCanvas (900,500);
    //initial ball positions
    rectMode (CENTER);
    ballx = width/2;
    bally = height/2;
    
    textAlign(CENTER);
}   // close setup




function draw () {
  // call functions
    keyTyped();//loop keyTuped function
    keyPressed();

  
  // aparence
    background (0);//black
    noFill(255);
    stroke(255);
    rect(width/2, height/2, width, height);//outer border
    line(450,0,450, height);

    //set colors
    fill(255);//white
    noStroke();//no border

    //draw ball
    rect(ballx,bally,ballWidh,ballHeight);


    // draw players

    rect(p1x,p1y,playerWidth,playerHeight,20);
    rect(p2x,p2y,playerWidth,playerHeight,20);
  
    // physics

    ballx = ballx + (ballDirectionx*ballSpeed); //move honrizontally
    bally = bally + (ballDirectiony*ballSpeed);
  
// colision
  
  if (bally >= height){
    //hit bottom wall
    ballDirectiony = ballDirectiony*-1
  }
  if (bally <=0){
    ballDirectiony = ballDirectiony*-1
  }
  
//colision avec les joueurs

  if (ballx - ballWidh/2 <= p1x + playerWidth/2 && bally >= p1y - playerHeight/2 && bally <= p1y + playerHeight/2){
    ballDirectionx = 1;
  }
  
  if (ballx + ballWidh/2 >= p2x - playerWidth/2 && bally >= p2y - playerHeight/2 && bally <= p2y + playerHeight/2){
    ballDirectionx = -1;
  }
  
  //scorebord
  textSize(15);
  text (p1Score,400,20);
  text(p2Score,500,20)
  
  if(ballx <=20){
    //player 2 scores
    console.log("inf")
    p2Score = p2Score +1;
    //reset ball
    ballx = width/2;
    bally = height/2;
  }

if(ballx >= width){
    //player 1 scores
    p1Score = p1Score +1;
    //reset ball
    ballx = width/2;
    bally = height/2;
}
  
  //colide with paddleds
  if (ballx >=p1x-10 && ballx <=p1x+10 && bally >= p1y <+50){
    //hit player
    ballDirectionx = ballDirectionx*-1
  }
  
  if (ballx >=p2x-10 && ballx <=p2x+10 && bally >= p2y <+50){
    //hit player
    ballDirectionx = ballDirectionx*-1
  }
  
  
}//close draw



function keyTyped (){
  if (key =="z" && keyIsPressed){
    p1y = p1y-pSpeed;
  }// close z
 
  if (key == "s" && keyIsPressed){
    p1y = p1y + pSpeed;
  }
  

}//close keytyped



function keyPressed (){
  if (keyCode == UP_ARROW && keyIsPressed){
    p2y = p2y-pSpeed;
  }// close z
 
  if (keyCode == DOWN_ARROW && keyIsPressed){
    p2y = p2y + pSpeed;
  }
}//close keytyped