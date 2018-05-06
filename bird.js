class Bird {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = width / 2;
        this.y = height / 2;
        this.gravity = 1;
        this.jump = 20
        this.velocity = 0;
    }

    show() {
        fill(0);
        ellipse(this.x, this.y, this.width, this.height);
    }

    fly() {
        this.velocity -= this.jump;
    }

    touches(pipe) {
        if (collideRectCircle(pipe.x, 0, pipe.width, pipe.height, this.x, this.y, this.width)) {
            return true;
        }
        if (collideRectCircle(pipe.x, pipe.y+pipe.gap, pipe.width, pipe.height, this.x, this.y, this.width)) {
            return true;
        }
        return false;
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height
            this.velocity = 0
        }

        if (this.y < 0) {
            this.y = 0
            this.velocity = 0
        }
    }
}
