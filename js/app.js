const openMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu") ;

openMenu.addEventListener("click", function(){
    mobileMenu.classList.toggle('show')
})