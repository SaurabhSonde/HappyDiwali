const container = document.querySelector(".container");

// get the images
function loadImages(numImages = 500) {
  let i = 0;
  while (i < numImages) {
    const img = document.createElement("img");
    img.src = "./happydiwali.gif";
    container.appendChild(img);
    i++;
  }
}

loadImages();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImages();
  }
});

// playing audio
window.onload = function () {
  playSound();
};

function playSound() {
  var myAudio = new Audio("./HappyDiwali.mp3");

  myAudio.volume = 1;

  var tank_driven_sound = setInterval(function () {
    myAudio.currentTime = 0;
    myAudio.play();
  }, 2000);
}
