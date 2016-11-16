// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var player1 = 1

var topleftclicked = 0
function topleft() {
  if (player1 == 0){
    if (topleftclicked == 0){
      var canvas = document.getElementById("game-board")
      var circle = document.createElementNS(namespace ,"circle")
      circle.setAttribute ("cx",25)
      circle.setAttribute ("cy",25)
      circle.setAttribute ("r",20)
      circle.setAttribute ("fill","red")
      canvas.appendChild(circle)
      topleftclicked = 1
  }
  }else{
    var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace,"rect")
    rect.setAttribute("x",20)
    rect.setAttribute("y",20)
    rect.setAttribute("width",20)
    rect.setAttribute("height",20)
    rect.setAttribute("fill","blue")
    canvas.appendChild(rect)
    topleftclicked = 0
    player1 = 0
  }
}
var topmiddleclicked = 0
function topmiddle() {
if (player1 == 1) {
  if (topmiddleclicked == 0){
    var canvas = document.getElementById("game-board")
    var circle = document.createElementNS(namespace,"circle")
    circle.setAttribute ("cx", 75)
    circle.setAttribute ("cy",25)
    circle.setAttribute ("r",20)
    circle.setAttribute ("fill","red")
    canvas.appendChild(circle)
    topmiddleclicked = 1
  }
}else{
  var canvas = document.getElementById("game-board")
  var rect = document.createElementNS(namespace,"rect")
  rect.setAttribute ("x",70)
  rect.setAttribute ("y",20)
  rect.setAttribute ("width",20)
  rect.setAttribute ("height",20)
  rect.setAttribute ("fill","blue")
  canvas.appendChild(rect)
  topmiddleclicked = 0
  player1 = 0
}
}
var toprightclicked = 0
function topright() {
  if (player1 == 0){
    if (toprightclicked == 0){
      var canvas = document.getElementById("game-board")
      var circle = document.createElementNS(namespace,"circle")
      circle.setAttribute ("cx",123)
      circle.setAttribute ("cy",25)
      circle.setAttribute ("r",20)
      circle.setAttribute ("fill","red")
      canvas.appendChild(circle)
      toprightclicked = 1
  }else{
    var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace,"rect")
    rect.setAttribute ("x",100)
    rect.setAttribute ("y",20)
    rect.setAttribute ("width",20)
    rect.setAttribute ("height",20)
    rect.setAttribute ("fill","blue")
    canvas.appendChild(rect)
    topmrightclicked = 0
    player1 = 1
  }
  }
}
