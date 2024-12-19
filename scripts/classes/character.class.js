class Character extends MovableObject {

    currentImage = 0;
    height = 81.5;
    width = 100;
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
        '/img/1.Sharkie/1.IDLE/18.png'
    ];
    deadImages = [
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00000.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00001.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00002.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00003.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00004.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00005.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00006.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00007.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00008.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00009.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00010.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png'
    ];
    hurtImages = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/.o1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/.o2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/.o1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/.o2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/.o1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/.o2.png'
    ];
    world;

    constructor() {
        super().loadImage(this.swimmingImages[0]);
        this.loadImages(this.swimmingImages);
        this.loadImages(this.deadImages);
        //this.loadImages(this.hurtImages);
        this.animation();
    }

    animation() {
        setInterval(() => {
            if (!this.health <= 0) {
                if (this.world.keyboard.right && this.x < this.world.level.levelEndX) {
                    this.x += this.speed + 2.5;
                    this.otherDirection = false;
                }
                if (this.world.keyboard.left && this.x > 0) {
                    this.x -= this.speed + 2.5;
                    this.otherDirection = true;
                }
                if (this.world.keyboard.up) {
                    this.y -= this.speed + 1;
                    this.otherDirection = false;
                }
                if (this.world.keyboard.down) {
                    this.y += this.speed + 1;
                    this.otherDirection = false;
                }
            } 

            this.world.camera_x = -this.x + 10;
        }, 1000 / 60);

        setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.deadImages)
            } else {
                if (this.world.keyboard.right || this.world.keyboard.left) {
                    this.playAnimation(this.swimmingImages);
                }
            }
        }, 100);
    }
}

// else if(this.isHurt()) {
//     this.playAnimation(this.hurtImages);
// }