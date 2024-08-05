
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");


const toggleNavbar = () => {
  // event.preventDefault();
 
nav_header.classList.toggle('active');
}

mobile_nav.addEventListener('click' , () => toggleNavbar());



const btn = document.querySelector('subscribe-btn');

const subscribe = () => {
  addEventListener('click' , () =>{
    alert("Subscribed");
  })
}


const button = document.querySelector("section-1-content-btn");

const moveto = ()  => {
  addEventListener('click' , () => {
    window.location.href = "blogdetails.html";
  })
}