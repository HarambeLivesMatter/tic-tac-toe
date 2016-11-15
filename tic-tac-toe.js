// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

function square1() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace ,"circle")
  circle.setAttribute ("cx",25)
  circle.setAttribute ("cy",25)
  circle.setAttribute ("r",20)
  circle.setAttribute ("fill","red")
  canvas.appendChild(circle)
}
