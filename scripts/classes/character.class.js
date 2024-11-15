class Character extends MovableObject {

    currentImage = 0;
    height = 110;
    widht = 140;
    swimmingImages = [
        '/img/1.Sharkie/1.IDLE/1.png',
        '/img/1.Sharkie/1.IDLE/2.png',
        '/img/1.Sharkie/1.IDLE/3.png',
        '/img/1.Sharkie/1.IDLE/4.png',
        '/img/1.Sharkie/1.IDLE/5.png',
        '/img/1.Sharkie/1.IDLE/6.png',
        '/img/1.Sharkie/1.IDLE/7.png',
        '/img/1.Sharkie/1.IDLE/8.png',
        '/img/1.Sharkie/1.IDLE/9.png',
        '/img/1.Sharkie/1.IDLE/10.png',
        '/img/1.Sharkie/1.IDLE/11.png',
        '/img/1.Sharkie/1.IDLE/12.png',
        '/img/1.Sharkie/1.IDLE/13.png',
        '/img/1.Sharkie/1.IDLE/14.png',
        '/img/1.Sharkie/1.IDLE/15.png',
        '/img/1.Sharkie/1.IDLE/16.png',
        '/img/1.Sharkie/1.IDLE/17.png',
        '/img/1.Sharkie/1.IDLE/18.png',
    ];
    world;

    constructor() {
        super().loadImage(this.swimmingImages[0]);
        this.loadImages(this.swimmingImages);
        this.animation();
    }

    animation() {

        setInterval(() => {
            if (this.world.keyboard.right && this.x < this.world.level.levelEndX) {
                this.x += this.speed + 2.5;
                this.otherDirection = false;
            }       
            if (this.world.keyboard.left && this.x > 0) {
                this.x -= this.speed + 2.5;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 10;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.right || this.world.keyboard.left) {
                this.playAnimation(this.swimmingImages);
            }
        }, 100);
    }
}