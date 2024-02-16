background(28,37,60) ;

let snowX = [];
let snowY = [];
let snowAlpha = [];

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

for(let i= 0; i < 500; i++){
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const alpha = Math.random();

    snowX.push(x);
    snowY.push(y);
    snowAlpha.push(alpha);
}

function draw (){
    noStroke();

    for (let index in snowX){
    fill(255,255,255, Math.abs(Math.sin(snowAlpha[index]))*255);
    ellipse(snowX[index], snowY[index], 2);
    snowAlpha[index] = snowAlpha[index] + 0.04;
    }

    rocket();
  
}
