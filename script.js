var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

console.log(body);
console.log(random);

changeColor();

function changeColor() {
    debugger;
    body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";" ;
}

function randomColor(rgb1, rgb2) {
    debugger;
    body.style.background = "linear-gradient(to right, " + rgb1 + ", " + rgb2 + ")";
    css.textContent = body.style.background + ";" ;
}

function generateRGB(str) {

    var red = Math.floor(Math.random() * 250 + 0);
    var green = Math.floor(Math.random() * 250 + 0);
    var blue = Math.floor(Math.random() * 250 + 0);
 
    str = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return str;
}

function randomize() {
    var rgbcolor1 = generateRGB(rgbcolor1);
    var rgbcolor2 = generateRGB(rgbcolor2);
  
    randomColor(rgbcolor1, rgbcolor2);
    //red = ("0" + red.toString(16)).substr(-2).toUpperCase();
    //green = ("0" + green.toString(16)).substr(-2).toUpperCase();
    //blue = ("0" + blue.toString(16)).substr(-2).toUpperCase();
  }

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);

random.addEventListener("click", randomize)