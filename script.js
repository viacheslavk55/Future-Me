const website1 = "https://betterprogramming.pub/why-software-developers-werent-meant-to-work-in-offices-2177421d5fce"
const website2 = "https://www.freecodecamp.org/news/collaborative-coding-tips/"
const website3 = "https://arc.dev/talent-blog/benefits-of-working-from-home/"
function linked1() {
    window.open(website1, '_blank');
}
function linked2() {
    window.open(website2, '_blank');
}
function linked3() {
    window.open(website3, '_blank');
}
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}