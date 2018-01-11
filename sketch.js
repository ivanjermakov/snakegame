let w = 500;
let h = 500;

let snake = new Snake();
let food = new Food();

let score = -1;

function setup() {
    createCanvas(w, h);
}

function draw() {
    background(41);

    food.update();
    eat();

    snake.updateTail();
    snake.update();
    snake.collisionBounds();

    showScore();
}

function keyPressed() {
    if (keyCode === UP_ARROW || keyCode === 87) {
        snake.direction(0, -1);
    }
    if (keyCode === RIGHT_ARROW || keyCode === 68) {
        snake.direction(1, 0);
    }
    if (keyCode === DOWN_ARROW || keyCode === 83) {
        snake.direction(0, 1);
    }
    if (keyCode === LEFT_ARROW || keyCode === 65) {
        snake.direction(-1, 0);
    }

    if (keyCode === 80) {
        noLoop();
    }
}

function eat() {
    d = dist(snake.x, snake.y, food.x, food.y);
    if (d < snake.size) {
        food.ate();
        score++;
        snake.increaseTail();
    }
}

function showScore() {
    textSize(20);
    fill(255);
    text("Score: " + score, w - 100, 20);
}