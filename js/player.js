class Player {
    constructor() {
        this.x = 10;
        this.y = 10;
    }

    draw() {
        drawRect(this.x, this.y, 100, 100);
    }

    update(x, y){
        thix.y += y;
        thix.y += x;
    }
}