function setGif() {
var x = Math.floor((Math.random() * 10) + 1);

if (x === 1) {
     document.getElementById("upperBlock").style.backgroundImage = "url(beaker.gif)";
} else if (x === 2) {
	document.getElementById("upperBlock").style.backgroundImage = "url(trollFace.gif)";
} else if (x === 3) {
	document.getElementById("upperBlock").style.backgroundImage = "url(spongebob.gif)";
} else if (x === 4) {
	document.getElementById("upperBlock").style.backgroundImage = "url(nyancat.gif)";
} else if (x === 5) {
	document.getElementById("upperBlock").style.backgroundImage = "url(dancememe.gif)";
} else if (x === 6) {
	document.getElementById("upperBlock").style.backgroundImage = "url(idk.gif)";
} else if (x === 7) {
	document.getElementById("upperBlock").style.backgroundImage = "url(teeth.gif)";
} else if (x === 8) {
	document.getElementById("upperBlock").style.backgroundImage = "url(lol.gif)";
} else if (x === 9) {
	document.getElementById("upperBlock").style.backgroundImage = "url(happy.gif)";
} else {
	document.getElementById("upperBlock").style.backgroundImage = "url(dancing.gif)";
}
}

window.onload = setGif();
