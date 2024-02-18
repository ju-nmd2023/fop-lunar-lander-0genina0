let starX = [];
let starY = [];
let starAlpha = [];

function earth(){
    fill(40,122,184);
    ellipse(500,100,250);
}

function moon (){
    fill(194,197,204);
    ellipse(300,710,600); 

    fill("darkgrey");
    ellipse(450,500,30, 25); 
    ellipse(380,460,20);
    ellipse(110,520,17, 15);
    stroke("lightgrey");
    strokeWeight(9);

    ellipse(190,520,100,80);
    noStroke();
}

function skull(){
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
    }

    //rocket
function rocket(){
    fill(87,88,87);
    arc(300,400,60,260,PI,0,CHORD);

    fill("darkgrey");
    arc(300,385,80,200,PI,0,CHORD);

    fill(150,123,182);
   arc(300,360,100,260,PI,0,CHORD);

   fill(35,46,48);
   stroke("darkgrey");
    strokeWeight(8);
   ellipse(300,300,60);

   noStroke();
   fill(157,193,131);
   triangle(273,250,327,250,299,205);


}

function flame(){
    fill("orange");
    ellipse(300,400,50);

    fill("yellow");
    ellipse(300,400,30);
}

for(let i= 0; i < 500; i++){
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const alpha = Math.random();

    starX.push(x);
    starY.push(y);
    starAlpha.push(alpha);
}

function draw (){
    noStroke();
    background(35,36,48) ;

    for (let index in starX){
    fill(255,255,255, Math.abs(Math.sin(starAlpha[index]))*255);
    ellipse(starX[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.04;
    }
    
    earth();
    moon();
    flame();
    rocket();
    skull();  
  
  
}
