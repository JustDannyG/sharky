class BackgroundObject extends MovableObject{

    widht = 300;
    height = 150;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 150 - this.height;
    }
}