window.onload = function() {
    setup();
}

function setup() {
    startTimer();
}

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("scrollingImg").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

var images = [], x = 0;
images[0] = "images/scrollImg1.jpg";
images[1] = "images/scrollImg2.jpg";
images[2] = "images/scrollImg3.jpg";
