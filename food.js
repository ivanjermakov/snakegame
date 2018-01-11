function Food() {
    this.size = 20;
    this.roundness = 4;

    this.x = w / 2 - ((w / 2) % this.size);
    this.y = h / 2 - ((h / 2) % this.size);

    this.update = function () {
        for (let i = 0; i < snake.tail.length; i++) {
            if (this.x === snake.tail[i].x &&
                this.y === snake.tail[i].y) {

                this.x = w / 2 - ((w / 2) % this.size);
                this.y = h / 2 - ((h / 2) % this.size);
            }
        }
        noStroke();
        fill(255, 80, 100);
        rect(this.x, this.y, this.size, this.size, this.roundness);
    };

    this.ate = function () {
        this.x = random(w);
        this.y = random(h);
        this.x = this.x - (this.x % this.size);
        this.y = this.y - (this.y % this.size);
    };
}
