// links
const website1 =
  "https://betterprogramming.pub/why-software-developers-werent-meant-to-work-in-offices-2177421d5fce";
const website2 = "https://www.freecodecamp.org/news/collaborative-coding-tips/";
const website3 = "https://arc.dev/talent-blog/benefits-of-working-from-home/";
const website4 = "https://www.freecodecamp.org/news/how-to-learn-programming/";
const website5 =
  "https://www.springboard.com/blog/cybersecurity/how-to-learn-cybersecurity/";
const website6 = "https://www.datacamp.com/blog/how-to-learn-ai";

function linked1() {
  window.open(website1, "_blank");
}
function linked2() {
  window.open(website2, "_blank");
}
function linked3() {
  window.open(website3, "_blank");
}
function linked4() {
  window.open(website4, "_blank");
}
function linked5() {
  window.open(website5, "_blank");
}
function linked6() {
  window.open(website6, "_blank");
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Education page parallax text

const left1 = document.getElementById("left1");
const left2 = document.getElementById("left2");
const left3 = document.getElementById("left3");
const right1 = document.getElementById("right1");
const right2 = document.getElementById("right2");
const right3 = document.getElementById("right3");
const divCentr = document.getElementById("centers");
const leftOn = document.getElementsByClassName("leftOn")[0];
const leftOn2 = document.getElementsByClassName("leftOn")[1];
const leftOn3 = document.getElementsByClassName("leftOn")[2];
const rightOn = document.getElementsByClassName("rightOn")[0];
const rightOn2 = document.getElementsByClassName("rightOn")[1];
const rightOn3 = document.getElementsByClassName("rightOn")[2];

let aligned = false;

window.addEventListener("scroll", function () {
  const windowScroll = window.scrollY;
  const newPosition = windowScroll / 4;

  // Apply parallax effect for left side
  left1.style.left = newPosition + "%";
  left2.style.left = newPosition - 5 + "%";
  left3.style.left = newPosition - 10 + "%";

  // Apply parallax effect for right side
  right1.style.right = newPosition + "%";
  right2.style.right = newPosition - 5 + "%";
  right3.style.right = newPosition - 10 + "%";

  // Check if elements are aligned and alignment hasn't been set yet
  if (!aligned && newPosition === 50) {
    divCentr.classList.add("text-center");
    leftOn.classList.remove("leftOn");
    leftOn2.classList.remove("leftOn");
    leftOn3.classList.remove("leftOn");
    rightOn.classList.remove("rightOn");
    rightOn2.classList.remove("rightOn");
    rightOn3.classList.remove("rightOn");
    aligned = true;
  } else if (windowScroll > 235) {
    divCentr.classList.add("text-center");
    leftOn.classList.remove("leftOn");
    leftOn2.classList.remove("leftOn");
    leftOn3.classList.remove("leftOn");
    rightOn.classList.remove("rightOn");
    rightOn2.classList.remove("rightOn");
    rightOn3.classList.remove("rightOn");
    aligned = true;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var element = document.getElementById("cardHover");
  // Add event listeners for touch events
  element.addEventListener("touchstart", function () {
    // Add the hover effect class
    this.classList.add("cardEffect");
  });

  element.addEventListener("touchend", function () {
    // Remove the hover effect class when touch ends
    this.classList.remove("cardEffect");
  });
});

const possibleResponse = [
  "What's the problem?",
  "Hmm, what's up?",
  "Great to hear!",
];
const responseBox = document.getElementById("responseBox");
const divBox = document.getElementById("divBox");

let divBoxVisible = false;
const feedbackArray = [];

function feedBack1() {
  responseBox.innerText = possibleResponse[0];
  divBox.classList.remove("d-none");
  divBoxVisible = true;
}

function feedBack2() {
  responseBox.innerText = possibleResponse[1];
  divBox.classList.remove("d-none");
  divBoxVisible = true;
}

function feedBack3() {
  responseBox.innerText = possibleResponse[2];
  divBox.classList.add("d-none");
  divBoxVisible = false;
}

function feedBack(sentence) {
  if (sentence !== "") {
    feedbackArray.push(sentence);
    // Do something with feedbackArray if needed
  } else {
    alert("Please enter a valid sentence."); // tell the user to put in a sentence
  }
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    const feedbackBox = document.getElementById("boxx");
    const sentence = feedbackBox.value;
    feedBack(sentence);
    feedbackBox.value = ""; // Clear the input field
  }
}

const boxx = document.getElementById("boxx");

boxx.addEventListener("keypress", handleKeyPress);
