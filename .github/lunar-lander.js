function setUp(){
    createCanvas(500,700);
}

let starX = [];
let starY = [];
let starAlpha = [];

function asteroid(x,y){
    push();
    translate(x,y);
    fill(255,211,0,120);
    ellipse(300,200,150,145);
    stroke(255,211,0,120);
    strokeWeight(55);
    line(300,155,382,155);
    line(300,205,400,205);
    line(300,245,365,245);

    noStroke();
    fill("lightgreen");
    stroke("lightgreen");
    strokeWeight(35);
    line(300,160,370,160);
    line(300,205,385,205);
    line(300,245,365,245);
    noStroke();
    ellipse(305,200,140,130);

    fill("green");
    ellipse(300,200,100);
    pop();
}

function moon(){
 //moon
 fill(194,197,204);
 ellipse(300,900,600); 

 fill("darkgrey");
 ellipse(450,700,30, 25); 
 ellipse(380,670,20);
 ellipse(110,720,17, 15);
 stroke("lightgrey");
 strokeWeight(9);

 ellipse(190,700,100,80);
 noStroke();
}


    //rocket
function rocket(x,y){
    push();
    translate(x,y);
    //legs
    fill(157,193,131);
    rect(240,330,30,30);
    triangle(240,332,233,400,250,360);
    rect(330,330,30,30);
    triangle(360,332,365,400,350,360);

    //body of
    fill(87,88,87);
    arc(300,400,60,260,PI,0,CHORD);

    fill("darkgrey");
    arc(300,385,80,200,PI,0,CHORD);

    fill(150,123,182);
   arc(300,360,100,260,PI,0,CHORD);

   //window
   fill(35,46,48);
   stroke("darkgrey");
    strokeWeight(8);
   ellipse(300,300,60);

   noStroke();
   //top point
   fill(157,193,131);
   triangle(273,250,327,250,299,205);
   //third leg
   triangle(299,408,288,346,312,346);

    //skull
    scale(0.5); 
    translate(450,520);
    noStroke();
    fill(255,255,255);
    ellipse(151,75,45);
    triangle(135,105,150,52,168,105);
    
    fill(0,0,0);
    ellipse(140,80,12);
    ellipse(162,80,12);
    line(145,107,145,95);
    triangle(147,90,151,83,156,90);
    stroke(0,0,0);
    strokeWeight(3);
    line(142,104,142,95);
    line(148,104,148,95);
    line(154,104,154,95);
    line(160,104,160,95);

    //window
    fill(173,216,230,160);
    noStroke();
    ellipse(150,80,105);
    pop();
}

function flame(x,y){
    push();
    translate(x,y);
    fill("orange");
    ellipse(300,400,50,70);

    fill("yellow");
    ellipse(300,400,30,35);
    pop();
}

function platform (){
    stroke(0,0,0);
    strokeWeight(10);
    line(209,619,230,554);
    line(372,556,400,619);
    line(301,556,304,619);

    noStroke();
    fill(40,122,184);
    rect(225,550,150,10);
}


for(let i= 0; i < 500; i++){
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const alpha = Math.random();

    starX.push(x);
    starY.push(y);
    starAlpha.push(alpha);
}

let rocketY = 100;
let velocity = 0.8;
let asteroidX = -100;
const acceleration = 0.1;

let startGame = true;
let gameIsRunning = false;
let gameWon = false;
let gameOver = false;

function draw (){
    noStroke();
    background(35,36,48);
//blinking stars
    for (let index in starX){
    fill(255,255,255, Math.abs(Math.sin(starAlpha[index]))*255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.04;
    }

    if (startGame){
        gameIsRunning = false;
        textSize(80);
        fill("yellow");
        stroke("purple");
        strokeWeight(6);
        text("Loonie Landers",30,310);
        noStroke(); 

        if(keyIsPressed && key === " "){
            gameIsRunning = true;
            startGame = false;
        }
    }

    if(rocketY > 550 && velocity > 3){
        gameIsRunning = false;
        gameOver = true;
    }

    if(gameIsRunning === true){
    
        rocket(0,rocketY);

        rocketY = rocketY + velocity;
        velocity = velocity + acceleration;
        
        if (keyIsPressed && key === " "){
            velocity = velocity -0.4  ;
            flame(0,rocketY);
        }

         }

    if(gameWon){
        gameOver = false;

    }

    platform();
    moon();

    //moving asteroids even when on start page 
    scale(0.5);
    asteroid(asteroidX + 1100,20);
    asteroid(asteroidX + 300,600);

    asteroidX = asteroidX - 9;

    if (asteroidX < -1500){
        asteroidX = width;
    }

       
    }




      


           
             









    










