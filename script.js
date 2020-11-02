var NumberOfWords = 30

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "duck"
words[2] = "alien"
words[3] = "sniper"
words[4] = "chinchilla"
words[5] = "minivan"
words[6] = "grandchild"
words[7] = "chameleon"
words[8] = "Harry Potter"
words[9] = "UFO"
words[10] = "Tetris"
words[11] = "Spongebob"
words[12] = "pickle"
words[13] = "dalmatian"
words[14] = "saxophone"
words[15] = "helicopter"
words[16] = "New York"
words[17] = "Wolverine"
words[18] = "notification"
words[19] = "thunder"
words[20] = "Discord"
words[21] = "notepad"
words[22] = "circus"
words[23] = "detective"
words[24] = "burrito"
words[25] = "jellyfish"
words[26] = "pistachio"
words[27] = "meteorite"
words[28] = "vacation"
words[29] = "pirate ship"
words[30] = "coffee"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}

//DRAW
var canvas = document.getElementById("draw");

var ctx = canvas.getContext("2d");
resize();

// resize canvas when window is resized
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

// initialize position as 0,0
var pos = { x: 0, y: 0 };

// new position from mouse events
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1) return; // if mouse is not clicked, do not go further

  var color = document.getElementById("hex").value;
 
  ctx.beginPath(); // begin the drawing path
  ctx.lineWidth = document.getElementById("linewidth").value; // Brush size
  //ctx.lineWidth = (10); // width of line
  ctx.lineCap = "round"; // rounded end cap
  ctx.strokeStyle = color; // hex color of line

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); // draw it!
}

// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);

// add event listeners to trigger on different mouse events
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

//To-Do List 
function newItem()
{
    console.log("Inside newItem");
    var item = document.getElementById("input").value; 
    console.log(item); 

    var ul = document.getElementById("list");
    
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(("- ") + item));

    ul.appendChild(li); 
    
    document.getElementById("input").value="";

    li.onclick = removeItem;

}

function removeItem(e)
{
    e.target.remove();
}

document.body.onkeyup = function(e) 
{
    if (e.keyCode == 13)
    {
        console.log("enter clicked!");
        newItem();  
    }
}

function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()', refresh)
}

function display_ct() {
    var x = new Date()
    document.getElementById('ct').innerHTML = x.toLocaleTimeString();
    tt=display_c();
 }
