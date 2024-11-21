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
  playAnimation(swimmingImages) {
    let i = this.currentImage % this.swimmingImages.length;
    let path = swimmingImages[i];
    this.img = this.movingImagesCache[path];
    this.currentImage++;

    if (character.x + character.width > chicken.x &&
      character.y + character.height > chicken.y &&
      character.x < chicken.x &&
      character.y < chicken.y + chicken.height
    ) { };
  }

  isColliding(obj) {
    return (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) &&
      (this.Y + this.offsetY + this.height) >= obj.Y &&
      (this.Y + this.offsetY) <= (obj.Y + obj.height) &&
      obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

  }

}
