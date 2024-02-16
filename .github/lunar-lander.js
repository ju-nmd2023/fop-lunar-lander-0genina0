

let starX = [];
let starY = [];
let starAlpha = [];

function skull(){
    //skull
    translate(150,200);
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
    }

    //rocket
function rocket(){
    fill("darkgrey");
    arc(300,385,80,200,PI,0,CHORD);

    fill(150,123,182);
   arc(300,360,100,260,PI,0,CHORD);

   fill("lightblue");
   stroke("darkgrey");
   strokeWeight(8);
   ellipse(300,300,60);

   noStroke();
   fill(157,193,131);
   triangle(273,250,327,250,299,205);
}

function flame(){
    fill("orange");
    ellipse(300,390,50);

    fill("yellow");
    ellipse(300,390,30);
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
    
    flame();
    rocket();

  
}
