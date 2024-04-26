function moveElement() {
  const leftIndex1 = document.getElementById("left-text1");
  var targetPosition = window.innerWidth / 2;

  function moveRight() {
    var currentPosition = leftIndex1.offsetLeft;

    while (currentPosition < targetPosition) {
      currentPosition++;
      leftIndex1.style.left = currentPosition + "px";
    }
  }
  moveRight()
}
function checkScroll() {
    if (window.scrollY > 100) {
        moveElement();
        window.removeEventListener('scroll', checkScroll);
    }
}

window.addEventListener('scroll', checkScroll);
