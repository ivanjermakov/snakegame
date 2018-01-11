function Snake() {
    this.x = 0;
    this.y = 0;

    this.dirX = 0;
    this.dirY = 0;

    this.xSpeed = 0;
    this.ySpeed = 0;

    this.step = 2;

    this.size = 20;

    this.tail = [];
    this.tailPos = {tailX: 0, tailY: 0};

    this.update = function () {

        if (this.x % this.size === 0 && this.y % this.size === 0) {
            this.xSpeed = this.dirX;
            this.ySpeed = this.dirY;
        }

        this.x += this.xSpeed * this.step;
        this.y += this.ySpeed * this.step;

        noStroke();
        fill(255);
        rect(this.x, this.y, this.size, this.size);
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

    this.collisionBounds = function () {
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
    };

    this.increaseTail = function() {

    };

    this.updateTail = function () {
        this.tailPos.tailX = this.x;
        this.tailPos.tailY = this.y;
        this.tail.unshift(this.tailPos);

        if (this.tail.length > 100) {
            this.tail.splice(-1, 1);
        }

        // for (let i = 0; i < this.tail.length; i++) {
        //     noStroke();
        //     fill(0, 255, 100);
        //     rect(this.tail[i].tailX, this.tail[i].tailY, this.size, this.size);
        //     // print(this.tail[i], this.x, this.y);
        // }
    };

}