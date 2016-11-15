// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var topleftclicked = 0
function topleft() {
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
}
var topmiddleclicked = 0
function topmiddle() {
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
}
var toprightclicked = 0
function topright() {
  if (toprightclicked == 0){
    var canvas = document.getElementById("game-board")
    var circle = document.createElementNS(namespace,"circle")
    circle.setAttribute ("cx",123)
    circle.setAttribute ("cy",25)
    circle.setAttribute ("r",20)
    circle.setAttribute ("fill","red")
    canvas.appendChild(circle)
    toprightclicked = 1
  }
}
