let w = 500;
let h = 500;

let snake = new Snake();
let food = new Food();

let score = 0;
let hScore = 0;

let domScore = document.getElementById('score');
let domHScore = document.getElementById('hScore');

function setup() {
    createCanvas(w, h);

    // frameRate(30);
    // background(41);
}

function draw() {
    background(41);

    food.update();
    eat();

    snake.update();
    snake.collision();

    // showScore();

    domScore.innerHTML = 'Score: ' + score;
    domHScore.innerHTML = 'Highscore: ' + hScore;
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
        snake.increaseTail();
        score++;
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

// function showScore() {
//     textSize(20);
//     textAlign(RIGHT);
//     fill(255);
//     text("Highscore: " + hScore, w - 5, 20);
//     text("Score: " + score, w - 5, 40);
// }

function gameOver() {
    snake.curLength = 0;
    snake.tail = [];

    if (score > hScore) {
        hScore = score;
    }
    score = 0;
}