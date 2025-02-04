bowlSpeed = 4;
bowlX = 0


function setup() {
    createCanvas(800, 600);
  }


function draw() {
    background(0);
    fill(72, 110, 107);
    ellipse(400,300,550,180);
    fill(137, 85, 25);
    ellipse(400,310,550,90);
    fill(217, 170, 52);
    //first noodle bundle
    ellipse(500,330,300,200);
    ellipse(520,335,270,190);
    ellipse(535,345,240,180);
    ellipse(550,360,220,160);
    ellipse(555,370,200,150);

    //second noodle bundle
    ellipse(300,360,300,200);
    ellipse(290,365,290,190);
    ellipse(280,370,270,180);
    ellipse(270,380,240,160);
    ellipse(260,390,220,150);

    //bowl

    if (keyIsDown(65)) { // 'A' key
      bowlX -= bowlSpeed;
    }
    if (keyIsDown(68)) { // 'D' key
      bowlX += bowlSpeed;
    }

    fill(56, 77, 75);
    rect(200 + bowlX,350,400,150);
    triangle(125 + bowlX,350,200 + bowlX,350,200 + bowlX,500);
    triangle(600 + bowlX,350,675 + bowlX,350,600 + bowlX,500);
    triangle(125 + bowlX,300,125 + bowlX,350,300 + bowlX,350);
    triangle(500 + bowlX,350,675 + bowlX,350,675 + bowlX,300);

    //Name and Author
    textSize(60);
    text("NOODLE HOP", 10, 70);
    textSize(20);
    text("Jonah Rohde", width - 150, height - 20,);
    

}

rgb(72, 110, 107)
