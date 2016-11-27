function setGif() {
var x = Math.floor((Math.random() * 10) + 1);

if (x === 1) {
     document.getElementById("upperBlock").style.backgroundImage = "url(gifs/beaker.gif)";
} else if (x === 2) {
	document.getElementById("upperBlock").style.backgroundImage = "url(gifs/trollFace.gif)";
} else if (x === 3) {
	document.getElementById("upperBlock").style.backgroundImage = "url(gifs/spongebob.gif)";
} else if (x === 4) {
	document.getElementById("upperBlock").style.backgroundImage = "url(gifs/nyancat.gif)";
} else if (x === 5) {
	document.getElementById("upperBlock").style.backgroundImage = "url(gifs/dancememe.gif)";
} else if (x === 6) {
	document.getElementById("upperBlock").style.backgroundImage = "url(gifs/idk.gif)";
} else if (x === 7) {
	document.getElementById("upperBlock").style.backgroundImage = "url(gifs/teeth.gif)";
} else if (x === 8) {
	document.getElementById("upperBlock").style.backgroundImage = "url(gifs/lol.gif)";
} else if (x === 9) {
	document.getElementById("upperBlock").style.backgroundImage = "url(gifs/happy.gif)";
} else {
	document.getElementById("upperBlock").style.backgroundImage = "url(gifs/dancing.gif)";
}
}

window.onload = setGif();
