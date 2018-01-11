function Food() {
    this.x = 0;
    this.y = 0;

    this.size = 20;

    this.update = function () {
        noStroke();
        fill(255, 80, 100);
        rect(this.x, this.y, this.size, this.size);
    };

    this.ate = function () {
        this.x = random(w);
        this.y = random(h);
        this.x = this.x - (this.x % this.size);
        this.y = this.y - (this.y % this.size);
    };
}
