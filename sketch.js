var dog,happydog,database;
var foodS,foodStock;

function preload(){
Dogimg = loadImage("images/dogImg.png");
Dogimg1= loadImage("images/dogImg1.png");	
}

function setup() { 
  database = firebase.database(); 
  console.log(database);             
	createCanvas(500,500);  
   dog = createSprite(300,200,50,50 );   
   dog.addImage("dog",Dogimg);
   dog.scale = 0.3;
   foodStock = database.ref('food');
   foodStock.on("value",readStock)
}


function draw() {  
    background(46,139,87);
     if (keyWentDown(UP_ARROW)){
       //database = database - 1
       //foodStock = foodStock - 1;
       writeStock(foodS);
       dog.addImage("dog",Dogimg1);
       
     }
     //firebase.update;
     drawSprites();
  text("note : press up arrow key to to feed the dog",100,50);
  // textsize(30);

  //add styles here

}
function readStock(data){ 
  foodS=data.val();
}

function writeStock(x){ 
  if (x<0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}



