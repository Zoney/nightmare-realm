import Phaser from "phaser";

const screenHeight = window.innerHeight * 0.8;
const screenWidth = Math.min(screenHeight * 0.6, window.innerWidth);

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: screenWidth,
  height: screenHeight,
  parent: 'phaser-game', // This ensures the canvas is appended to the specific element
  scene: {
    preload: preload,
    create: create,
  },
};

function preload(this: Phaser.Scene) {
  this.load.image("puppy", "puppy2.png");
}

function create(this: Phaser.Scene) {
  this.puppy = this.add.sprite(screenWidth / 2, screenHeight, "puppy");
  this.puppy.setOrigin(0.5, 1); // Set the origin of the sprite to the bottom center
  this.puppy.setScale(0.1); // Set the scale of the puppy sprite to 1/10

  // Tail wiggle
  this.tweens.add({
    targets: this.puppy,
    rotation: 0.1,
    ease: "Sine.easeInOut",
    duration: 500,
    yoyo: true,
    repeat: -1,
  });

  // Jump on spacebar press
  if (this.input.keyboard) {
    this.input.keyboard.on("keydown-SPACE", () => {
      jump.call(this);
    });
  }
  // Jump on any pointer down event (mouse, touch, etc.)
  this.input.on(Phaser.Input.Events.POINTER_DOWN, () => {
    jump.call(this);
  });

  // Add the jump method
  function jump(this: Phaser.Scene) {
    this.tweens.add({
      targets: this.puppy,
      y: this.puppy.y - 100,
      duration: 200,
      ease: "Power1",
      yoyo: true,
    });
  }
}

export const startGame = () => {
  new Phaser.Game(config);
};
function jump(this: Phaser.Scene) {
  this.tweens.add({
    targets: this.puppy,
    y: this.puppy.y - 100,
    duration: 200,
    ease: "Power1",
    yoyo: true,
  });
}

