
var timerValue = 10;

var img;


function setup() {
    createCanvas(800, 600);
    setInterval(timeIt, 200);
  }


class Knight {
    constructor(img,x,y) {
      this.x = x;
      this.y = y;
      this.img = img;
    }
    draw()
    {
      image(img,0,0);
    }
  }

var KnightArray = [];

KnightArray[0] = Knight1 = new KnightArray('images/CharacterSprite/Idle (1).png',0,0);
KnightArray[1] = Knight2 = new KnightArray('images/CharacterSprite/Idle (2).png',0,0);
KnightArray[2] = Knight3 = new KnightArray('images/CharacterSprite/Idle (2).png',0,0);


function draw() {
    background(0);
    for(var i = 0; i < KnightArray.length; i++)
    {
      KnightArray[i].draw();
    }
    if (timerValue == 0) {
      text('Congradulations, 10 seconds passed', width / 2, height / 2 + 15);
    }
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
    fill(56, 77, 75);
    rect(200,350,400,150);
    triangle(125,350,200,350,200,500);
    triangle(600,350,675,350,600,500);
    triangle(125,300,125,350,300,350);
    triangle(500,350,675,350,675,300);

    textSize(60);
    text("NOODLE HOP", 10, 70);
    textSize(20);
    text("Jonah Rohde", width - 150, height - 20,);

    //Timer countdown
    
    

}



function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}


//rgb(72, 110, 107)
