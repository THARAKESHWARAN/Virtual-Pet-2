var dogImg, happyDog, milkImg;
var dog, food;
var database, Foodref;
var state;
var feedButton;


function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  dog = new Dog();
  food = new Food();

  food.getstock();
  food.getLastFed();

  buttons();
}



function draw() {

  background(46, 139, 87);

  textSize(20);
  stroke(255, 255, 255);
  strokeWeight(2);

  drawSprites();


  dog.display();

  food.actions();

  if (dog.state === "hungry") {
    text("You can Feed Your Dog Pressing Up-arrow!", 50, 470);
  }

  if (dog.state === "happy") {
    text("If you need to get food, come back at even hours!", 30, 470);
  }

  text("Food available: " + food.stock, 50, 50);
  text("Last Fed: "+food.fedHour+":"+food.fedMinute, 30, 350);

  if (food.stock > 0) {
    feedButton.mousePressed(() => {
      food.stock--;
      food.updatestock(food.stock);
      dog.state = "happy";
      hours();
    })
  }else if(food.stock === 0){
    feedButton.mousePressed(()=>{
      alert("There's no food! Please add it!");
    })
  }

  
  if (food.stock <= 19) {
    addButton.mousePressed(() => {
      food.stock++;
      food.updatestock(food.stock);
    });
  }else{
    addButton.mousePressed(()=>{
      if (food.stock === 20) {
        alert("Your Bag is full!")
      }
    });
  }

}

function buttons() {
  feedButton = createButton("Feed");
  feedButton.position(width + 250, 180);
  addButton = createButton("Add");
  addButton.position(width + 360, 180);
}

function hours(){ 
  var hor = hour();
  console.log(hor);
  var min = minute();
  food.updateLastFed(hor, min);
}




