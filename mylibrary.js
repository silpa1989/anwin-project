function bounceOff(object1,object2){
if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x -object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object1.height/1 + object2.height/2) {
 object1.velocityX=object1.velocityX*(-1);
 object2.velocityX=object2.velocityX*(-1);

}

else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
}