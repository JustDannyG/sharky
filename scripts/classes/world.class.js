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
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        })
    }

    addObjectsToMap(objects) {
        objects.forEach(obj => {
            this.addObjectToMap(obj);
        });
    }

    addObjectToMap(mO) {
        if (mO.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mO.widht, 0)
            this.ctx.scale(-1, 1);
            mO.x = mO.x * -1;
        }
        this.ctx.drawImage(mO.img, mO.x, mO.y, mO.widht, mO.height);
        
        this.ctx.beginPath();
        this.ctx.lineWidth = '2 ';
        this.ctxstrokeStyle = 'grey';
        this.ctx.rect(mO.x, mO.y, mO.x + mO.widht, mO.y + mO.height)
        this.ctx.stroke();

        if (mO.otherDirection) {
            mO.x = mO.x * -1;
            this.ctx.restore();
        }
    }
    
}