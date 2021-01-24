const Engine=Matter.Engine
const Body=Matter.Body
const World=Matter.World
const Bodies=Matter.Bodies
var backgroundImg,farry1,farry2,farry3,star1
var farry,star,engine,world,starBody
var Music
function preload()
{
   //preload the images here
   backgroundImg=loadImage("images/starnight.png")
   farry1=loadImage("images/fairy.png")
   farry2=loadImage("images/fairy1.png")
   farry3=loadImage("images/fairy2.png")
   star1=loadImage("images/star.png")
   Music=loadSound("sound/JoyMusic.mp3")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  farry=createSprite(200,200,20,20)
  farry.addAnimation("fairy",farry1)
  farry.scale=0.09
  star=createSprite(windowWidth/2+500,windowHeight/2-200,10,10)
  star.addImage("star2",star1)
  star.scale=0.2
  engine=Engine.create()
  world=engine.world
  starBody=Bodies.circle(windowWidth/2+500,windowHeight/2-200,5,{restitution:0.5,isStastic:true})
  World.add(world,starBody)
  Engine.run(engine)
}


function draw() {
  background(backgroundImg);
  star.x=starBody.position.x
  star.y=starBody.position.y
  if (star.y>windowHeight/2-200 && starBody.position.y>windowHeight/2-200){
    Matter.Body.setStatic(starBody,true)
  }
  if (keyCode==LEFT_ARROW){
    farry.addAnimation("fary2",farry2)
    farry.changeAnimation("fary2")
  farry.x=farry.x-3
  translation={
    x:-3,y:0
}
  }
  if (keyCode==RIGHT_ARROW){
    farry.addAnimation("fary3",farry3)
    farry.changeAnimation("fary3")
    farry.x=farry.x+3
    translation={
      x:+3,y:0
  }
    }
    if (keyCode==DOWN_ARROW){
      Matter.Body.setStatic(starBody,false)
    }
    edges=createEdgeSprites()
    farry.bounceOff(edges)
  drawSprites()
}
