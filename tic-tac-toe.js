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
    toprightclicked = 0
    player1 = 1
  }
  }
}var middleftclicked = 0
function middleft(){
  if (player1 = 1){
    if (middleftclicked == 0){
      var canvas = document.getElementById("game-board")
      var circle = document.createElementNS(namespace,"circle")
      circle.setAttribute("cx",20)
      circle.setAttribute("cy",71)
      circle.setAttribute("r",20)
      circle.setAttribute("fill","red")
      canvas.appendChild(circle)
      middleftclicked = 1
    }else{
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",0)
      rect.setAttribute("y",51)
      rect.setAttribute("height",20)
      rect.setAttribute("width",20)
      rect.setAttribute("fill","blue")
      canvas.appendChild(rect)
      middleftclicked = 0
      player1 = 0
    }
  }
}
var middlemiddleclicked = 0
function middlemiddle(){
  if (player1 == 1){
    if (middlemiddleclicked == 0){
      var canvas = document.getElementById("game-board")
      var circle = document.createElementNS(namespace,"circle")
      circle.setAttribute("cx",71)
      circle.setAttribute("cy",71)
      circle.setAttribute("r",20)
      circle.setAttribute("fill","red")
      canvas.appendChild(circle)
      middlemiddleclicked = 1
    }else{
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",50)
      rect.setAttribute("y",50)
      rect.setAttribute("height",20)
      rect.setAttribute("width",20)
      rect.setAttribute("fill","blue")
      canvas.appendChild(rect)
      middlemiddleclicked = 0
      player1 = 0
    }
  }
}
var middlerightclicked = 0
function middleright(){
  if (player1 == 0){
    if (middlerightclicked == 0){
      var canvas = document.getElementById("game-board")
      var circle = document.createElementNS(namespace,"circle")
      circle.setAttribute("cx",120)
      circle.setAttribute("cy",71)
      circle.setAttribute("r",20)
      circle.setAttribute("fill","red")
      canvas.appendChild(circle)
      middlerightclicked = 1
    }else{
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(nameespace,"rect")
      rect.setAttribute("x",102)
      rect.setAttribute("y",51)
      rect.setAttribute("height",20)
      rect.setAttribute("width",20)
      rect.setAttribute("fill","blue")
      canvas.appendChild(rect)
      middlerightclicked = 0
      player1 = 1
    }
  }
}
var bottomleftclicked = 0
function bottomleft(){
  if (player1 == 0){
    if (bottomleftclicked == 0){
      var canvas = document.getElementById("game-board")
      var circle = document.createElementNS(namespace,"circle")
      circle.setAttribute("cx",10)
      circle.setAttribute("cy",120)
      circle.setAttribute("r",20)
      circle.setAttribute("fill","red")
      canvas.appendChild(circle)
      bottomleftclicked = 1
    }else{
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",0)
      rect.setAttribute("y",110)
      rect.setAttribute("width",20)
      rect.setAttribute("height",20)
      rect.setAttribute("fill","blue")
      canvas.appendChild(rect)
      bottomleftclicked = 0
      player1 = 0
    }
  }
}
var bottomiddleclicked = 0
function bottomiddle(){
  if(player1 == 1){
    if (bottomiddleclicked == 0){
      var canvas = document.getElementById("game-board")
      var circle = document.createElementNS(namespace,"circle")
      circle.setAttribute("cx",55)
      circle.setAttribute("cy",120)
      circle.setAttribute("r",20)
      circle.setAttribute("fill","red")
      canvas.appendChild(circle)
      bottomiddleclicked = 0
    }else{
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",57)
      rect.setAttribute("y",122)
      rect.setAttribute("width",20)
      rect.setAttribute("height",20)
      rect.setAttribute("fill","blue")
      canvas.appendChild(rect)
      bottomiddleclicked = 0
      player1 = 0
    }
  }
}
var bottomrightclicked = 0
function bottomright(){
  if(player1 == 1){
    if(bottomrightclicked == 0){
      var canvas = document.getElementById("game-board")
      var circle = document.createElementNS(namespace,"circle")
      circle.setAttribute("cx",140)
      circle.setAttribute("cy",140)
      circle.setAttribute("r",20)
      circle.setAttirbute("fill","red")
      canvas.appendChild(circle)
      bottomrightclicked = 1
    }else{
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",145)
      rect.setAttribute("y",145)
      rect.setAttribute("width",20)
      rect.setAttribute("height",20)
      rect.setAttribute("fill","blue")
      canvas.appendChild(rect)
      bottomrightclicked = 0
      player1 = 0
    }
  }
}
