import * as Phaser from "phaser";

const screenHeight = window.innerHeight * 0.8;
const screenWidth = Math.min(screenHeight * 0.6, window.innerWidth);

class GameScene extends Phaser.Scene {
  puppy!: Phaser.GameObjects.Sprite; // Declare the 'puppy' property
  sfxButton!: Phaser.GameObjects.Sprite; // Declare the 'sfxButton' property
  musicButton!: Phaser.GameObjects.Sprite; // Declare the 'musicButton' property
  musicOn = true; // Declare the 'musicOn' property
  sfxOn = true; // Declare the 'sfxOn' property
  resettingPuppy = false;

  preload(this: GameScene) {
    this.load.image("puppy", "puppy2.png");
    this.load.image("onButton", "on.png"); // Load the SFX button image
    this.load.image("offButton", "off.png"); // Load the Music button image
    this.load.audio("jump", "jump.m4a"); // Load the jump sound
    this.load.audio("music", "music.m4a"); // Load the background music
    this.load.image('background', 'background.webp');

  }

  update(this: GameScene) {
    // Check if the puppy has reached the top of the screen
    if (this.puppy.y <= 0 || this.resettingPuppy) {
      this.resettingPuppy = true;
      // Set the puppy's y position to the screen height
      this.puppy.y = screenHeight;
      // Spin the puppy
      this.tweens.add({
        targets: this.puppy,
        angle: 360, // Spin the puppy 360 degrees
        duration: 1000, // Duration of the spin
        ease: "Power2", // Easing function
      });
    }
    if (this.puppy.y >= screenHeight && this.resettingPuppy) {
      this.resettingPuppy = false;
    }
  }

  create(this: GameScene) {
    const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
    backgroundImage.alpha = 0.2; // Set the alpha value to 0.8 for a faded effect

    if (this.musicOn) {
      this.sound.play("music", { loop: true });
    }
    this.puppy = this.add.sprite(screenWidth / 2, screenHeight, "puppy");
    this.puppy.setOrigin(0.5, 1); // Set the origin of the sprite to the bottom center
    this.puppy.setScale(0.1); // Set the scale of the puppy sprite to 1/10

    // Add SFX button
    this.sfxButton = this.add.sprite(50, 50, "onButton");
    //add text above
    this.add.text(20, 10, "Effekter", { fontSize: "24px", color: "white" });
    this.sfxButton.setScale(0.2); // Set the scale of the sfxButton sprite to 1/2
    this.sfxButton.setInteractive();
    this.sfxButton.on("pointerdown", () => {
      this.sfxOn = !this.sfxOn;
      this.sfxButton.setTexture(this.sfxOn ? "onButton" : "offButton");
    });

    // Add Music button
    this.musicButton = this.add.sprite(200, 50, "onButton");
    this.add.text(170, 10, "Sang", { fontSize: "24px", color: "white" });
    this.musicButton.setScale(0.2); // Set the scale of the sfxButton sprite to 1/2
    this.musicButton.setInteractive();
    this.musicButton.on("pointerdown", () => {
      this.musicOn = !this.musicOn;
      this.musicButton.setTexture(this.musicOn ? "onButton" : "offButton");
      if (this.musicOn) {
        this.sound.play("music", { loop: true });
      } else {
        this.sound.stopByKey("music");
      }
    });

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
      // if (this.musicButton && !this.musicButton.input?.hitArea) {
      jump.call(this);
      // }
    });

    // Add the jump method
    function jump(this: GameScene) {
      if (this.resettingPuppy) {
        return;
      }
      this.tweens.add({
        targets: this.puppy,
        y: this.puppy.y - 100,
        duration: 200,
        ease: "Power1",
        yoyo: true,
      });
      // Play the jump sound if sfx is on
      if (this.sfxOn) {
        this.sound.play("jump");
      }
    }
  }
}
let game: Phaser.Game;

export const startGame = () => {
  game = new Phaser.Game(config);
};

export const destroyGame = () => {
  if (game) {
    game.destroy(true);
  }
};

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: screenWidth,
  height: screenHeight,
  parent: "phaser-game", // This ensures the canvas is appended to the specific element
  scene: GameScene,
};
