class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                }
            })
        }, 1000);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })
    }

    addObjectsToMap(objects) {
        objects.forEach(obj => {
            this.addObjectToMap(obj);
        });
    }

    addObjectToMap(mO) {
        if (mO.img && mO.img.complete) {
            if (mO.otherDirection) {
                this.ctx.save();
                this.ctx.translate(mO.width, 0)
                this.ctx.scale(-1, 1);
                mO.x = mO.x * -1;
            }

            this.ctx.drawImage(mO.img, mO.x, mO.y, mO.width, mO.height);
            this.setGrid(mO.x, mO.y, mO.width, mO.height);

            if (mO.otherDirection) {
                mO.x = mO.x * -1;
                this.ctx.restore();
            }
        }
    }

    setGrid(mOX, mOY, mOWidth, mOWheight) {
        this.ctx.beginPath();
        this.ctx.lineWidth = '2';
        this.ctx.strokeStyle = 'white';
        this.ctx.rect(mOX, mOY, mOWidth, mOWheight)
        this.ctx.stroke();
    }

}