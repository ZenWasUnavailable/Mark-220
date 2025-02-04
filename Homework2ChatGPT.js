let noodles = [];
let bowlX;
let bowlSpeed = 5;

function setup() {
  createCanvas(400, 400);
  noStroke();

  // Initialize bowl's starting X position
  bowlX = width / 2;

  // Create noodle objects with random positions, speeds, and directions
  for (let i = 0; i < 10; i++) {
    noodles.push({
      x: random(bowlX - 70, bowlX + 70), // Noodles start inside the bowl
      y: random(height / 2 + 10, height / 2 + 50), // Noodles start above the bowl
      dx: random(2, 5) * (random() > 0.5 ? 1 : -1), // Random speed in X direction
      dy: random(2, 5) * (random() > 0.5 ? 1 : -1), // Random speed in Y direction
      size: random(8, 20), // Random noodle size (width & height)
    });
  }
}

function draw() {
  background(255);

  // Move the bowl left and right with 'A' and 'D' keys
  if (keyIsDown(65)) { // 'A' key
    bowlX -= bowlSpeed;
  }
  if (keyIsDown(68)) { // 'D' key
    bowlX += bowlSpeed;
  }

  // Ensure the bowl stays within the canvas bounds
  bowlX = constrain(bowlX, 50, width - 50);

  // Bowl (bottom part)
  fill(139, 69, 19); // brown color for the bowl
  arc(bowlX, height / 2 + 50, 200, 100, 0, PI, CHORD); // bowl bottom
  
  // Ramen soup (inside the bowl)
  fill(255, 228, 196); // light soup color
  ellipse(bowlX, height / 2 + 20, 180, 80); // soup surface inside the bowl
  
  // Draw and update noodle positions
  fill(255, 255, 0); // yellow for noodles
  for (let i = 0; i < noodles.length; i++) {
    let noodle = noodles[i];

    // Update noodle position (move noodles inside the bowl and bounce off edges)
    noodle.x += noodle.dx;
    noodle.y += noodle.dy;

    // Bounce the noodles off the edges of the canvas
    if (noodle.x < 0 || noodle.x > width) noodle.dx *= -1; // Bounce horizontally
    if (noodle.y < 0 || noodle.y > height) noodle.dy *= -1; // Bounce vertically

    // Draw the noodle (as an ellipse)
    ellipse(noodle.x, noodle.y, noodle.size, noodle.size);
  }

  // Toppings: Soft-boiled egg (inside the bowl)
  fill(255, 255, 255); // egg white
  ellipse(bowlX - 50, height / 2 + 5, 30, 20); // egg white
  fill(255, 204, 0); // egg yolk
  ellipse(bowlX - 50, height / 2 + 5, 15, 15); // egg yolk
  
  // Toppings: Chashu Pork (inside the bowl)
  fill(255, 182, 142); // light brown for pork
  beginShape();
  vertex(bowlX + 50, height / 2 - 10);
  vertex(bowlX + 70, height / 2 + 5);
  vertex(bowlX + 90, height / 2 + 20);
  vertex(bowlX + 70, height / 2 + 35);
  vertex(bowlX + 50, height / 2 + 25);
  endShape(CLOSE); // pork slice
  
  // Toppings: Green onion (inside the bowl)
  fill(34, 139, 34); // green for onions
  for (let i = 0; i < 5; i++) {
    line(bowlX + random(-50, 50), height / 2 + random(-30, 30) + 20, bowlX + random(-50, 50), height / 2 + random(-30, 30) + 20);
  }
}