class Pipe {
    constructor() {
        this.width = 100;
        this.gap = random(50, 300)
        this.height = (height / 2) - this.gap;
        this.x = width / 1;
        this.y = height / 2;
    }
    show() {
        fill(0);
        rect(this.x, this.y+this.gap, this.width, this.height);
        fill(0);
        rect(this.x, 0, this.width, this.height);
    }
    update() {
        this.x -= 1;
    }
}
