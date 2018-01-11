function Snake() {
    this.x = 0;
    this.y = 0;

    this.dirX = 0;
    this.dirY = 0;

    this.xSpeed = 0;
    this.ySpeed = 0;

    this.step = 2;

    this.size = 20;
    this.roundness = 4;

    this.tail = [];
    this.curLength = 0;
    this.tailStep = 9;

    this.update = function () {

        if (this.x % this.size === 0 && this.y % this.size === 0) {
            this.xSpeed = this.dirX;
            this.ySpeed = this.dirY;

        }

        this.updateTail();
        this.displayTail();

        this.x += this.xSpeed * this.step;
        this.y += this.ySpeed * this.step;


        noStroke();
        fill(255);
        rect(this.x, this.y, this.size - 1, this.size - 1, this.roundness);
    };

    this.direction = function (dirX, dirY) {
        if (dirY === -1 && this.ySpeed !== 1) {
            this.dirX = 0;
            this.dirY = -1;
        }
        if (dirX === 1 && this.xSpeed !== -1) {
            this.dirX = 1;
            this.dirY = 0;
        }
        if (dirY === 1 && this.ySpeed !== -1) {
            this.dirX = 0;
            this.dirY = 1;
        }
        if (dirX === -1 && this.xSpeed !== 1) {
            this.dirX = -1;
            this.dirY = 0;
        }
    };

    this.collision = function () {
        if (this.x < 0) {
            this.x = w - this.size;
        }

        if (this.x > w - this.size) {
            this.x = 0;
        }

        if (this.y < 0) {
            this.y = h - this.size;
        }
        if (this.y > h - this.size) {
            this.y = 0;
        }

        for (let i = this.tail.length - this.tailStep * 2; i >= 0; i--) {
            if (this.tail[i]) {
                let curPos = this.tail[i];
                let d = dist(this.x, this.y, curPos.x, curPos.y);
                if (d < this.size) {
                    gameOver();
                }
            }
        }
    };

    this.increaseTail = function () {
        this.curLength += this.tailStep;
    };

    this.updateTail = function () {
        let tailPos = createVector(this.x, this.y);
        this.tail.push(tailPos);

        if (this.tail.length > this.curLength) {
            this.tail.splice(0, 1);
        }

    };

    this.displayTail = function () {
        for (let i = this.tail.length - 1; i >= 0; i--) {
            let curPos = this.tail[i];
            noStroke();
            fill(255);
            rect(curPos.x, curPos.y, this.size - 1, this.size - 1, this.roundness);
        }
    };

}