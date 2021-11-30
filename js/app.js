/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const nav = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
let btn = document.querySelector("#topButton");
/**
 * End Global Variables
 */

// Build menu and Scroll to section on link click
// Loop to create navbar content depend on sections number

sections.forEach(section => {
  const liNav = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link"> ${section.id} </a></li>`;
  nav.insertAdjacentHTML("beforeend", liNav);
});

// Set sections and menu links as active within viewport
window.onscroll = function() {
  sections.forEach(function(active) {
    let activeLink = nav.querySelector(`[data-nav=${active.id}]`);
    const dimentions = active.getBoundingClientRect().top;
    if (dimentions.top >= -400 && dimentions.top <= window.innerHeight) {
      active.classList.add("your-active-class");
      activeLink.classList.add("active__link");
    } else {
      active.classList.remove("your-active-class");
      activeLink.classList.remove("active__link");
    }
  });
};

//Back to top Button
// Show back to top button when scroll down and hide it when scroll up
function toggle() {
  if (window.scrollY >= 1000) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
}

window.addEventListener("scroll", toggle);

// Scroll smoothly to the top of the page on click the button
btn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// Add and remove responsive class on small screens
function burger_menu() {
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// Scroll smoothly to anchor ID using scrollTO event
nav.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.dataset.nav) {
    document
      .getElementById(`${e.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${e.target.dataset.nav}`;
    }, 200);
  }
});
