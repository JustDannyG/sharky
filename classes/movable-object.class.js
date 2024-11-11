 class MovableObject {
    x = 0;
    y = 40;
    height = 10;
    widht = 10; 
    speed = 0.15;
    img;
    movingImagesCache = {};
    otherDirection = false;

    loadImage(path) {
      this.img = new Image();
      this.img.src = path;
    }

    loadImages(array) {
      array.forEach(path => {
         let img = new Image();
         img.src = path;
         this.movingImagesCache[path] = img;
       });
    }

    moveRight() {
        
    }

    moveLeft() {
      setInterval(() => {
         this.x -= this.speed;
      })
      
    }
 }