// JavaScript code to make the navbar sticky
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const containerPaddingTop = parseInt(window.getComputedStyle(container).paddingTop);
let isSticky = false;

window.addEventListener('scroll', function() {
  if (window.scrollY > containerPaddingTop) {
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.left = '0';
    isSticky = true;
  } else {
    header.style.position = isSticky ? 'fixed' : 'relative';
  }
});
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
navbar.classList.toggle('active');
}

let search = document.querySelector('.search');
let searchInput = document.querySelector('#search');

let menuBar = document.querySelector('#menu-bar');

menuBar.onclick = () => {
navbar.classList.toggle('active');
};

// Hide navbar when clicking outside of it
document.addEventListener('click', (event) => {
if (!navbar.contains(event.target) && !menuBar.contains(event.target)) {
navbar.classList.remove('active');
}
});

// Toggle vertical layout for navibar links
menuBar.addEventListener('click', () => {
let links = document.querySelectorAll('.navbar a');
links.forEach((link) => {
link.classList.toggle('vertical');
});
});

// Toggle search box on click
searchInput.onclick = (event) => {
event.stopPropagation(); // Prevent click event from bubbling up
search.classList.toggle('active');
};

// Hide search box when clicking outside of it
document.addEventListener('click', (event) => {
if (!search.contains(event.target)) {
search.classList.remove('active');
}
});



        // JavaScript code to add hover effect
        const navButton = document.getElementById('nav-button');
        navButton.addEventListener('mouseover', function() {
            navButton.style.backgroundColor = '#F1F7ED';
            navButton.style.color = '#579981';
        });

        navButton.addEventListener('mouseout', function() {
            navButton.style.backgroundColor = '#579981';
            navButton.style.color = '#F1F7ED';
        });
   