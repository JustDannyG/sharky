class MovableObject {
  x = 0;
  y = 30;
  height = 0;
  width = 0;
  speed = 0.15;
  img;
  movingImagesCache = {};
  otherDirection = false;
  health = 100;
  animationCompleted;

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

  playAnimation(images) {
    if (!this.animationCompleted) {
      let i = this.currentImage % images.length; // Aktuelles Bild auswählen // ket i = 7 % 6 = 1, Rest 1
      let path = images[i];
      this.img = this.movingImagesCache[path];
      this.currentImage++;
      // Prüfen, ob die Animation abgeschlossen ist
      if (this.currentImage >= images.length) {
        this.animationCompleted = true; // Markiere Animation als abgeschlossen
        this.img = this.movingImagesCache[images[images.length - 1]]; // Letztes Bild setzen
      }
    }
  }

  isColliding(mO) {
    return this.x + this.width > mO.x &&
      this.y + this.height > mO.y &&
      this.x < mO.x &&
      this.y < mO.y + mO.height;
  }

  hit() {
    this.health -= 5;
    if (this.health <= 0) {
      this.health = 0;
    }
    console.log(this.health);
  }

  isHurt() {

  }

  isDead() {
    return this.health == 0;
  }
}
