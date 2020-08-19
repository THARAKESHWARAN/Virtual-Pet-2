class Dog {

    constructor() {
        this.body = createSprite(width - 150, height / 2+50, 0, 0);
        this.image = loadImage("images/Dog.png");
        this.happyImage = loadImage("images/happydog.png");
        this.body.addImage("dog", this.image);
        this.body.addImage("happyDog", this.happyImage);
        this.body.scale = 0.2;
        this.state = "hungry";
    }

    display() {
        if (this.state === "hungry") {
            text("Feed Your Dog, IT'S HUNGRY!", 100, 440);
            this.body.changeImage("dog");
        }

        if (this.state === "happy") {
            this.body.scale = 0.2;
            this.body.x = width - 200;
            this.body.changeImage("happyDog");
            text("Your Dog Is Happy!", 150, 440);
        }
    }
}
