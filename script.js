/*-------------------SHOW SEARCH BOX------------------- */
const ShowSearchBox = (sbox , sicon) => {
    const SearchBox = document.getElementById(sbox);
    const SearchIcon = document.getElementById(sicon);
    
    // Checking That The Upper Declared Variables Exists Or Not
    if(SearchBox && SearchIcon){
        SearchIcon.addEventListener('click' , () => {
            SearchIcon.classList.toggle('fa-times');
            SearchBox.classList.toggle('active');
        });
    }
}

//Calling The Upper Declared Function
ShowSearchBox('search-box' , 'search-icon');


/*------------------------SHOW NAVBAR-----------------------*/

const ShowNavbar = (nav , navbar) => {
    const NavBarIcon = document.getElementById(nav);
    const NavBar = document.getElementById(navbar);
    if(NavBarIcon && NavBar){
        NavBarIcon.addEventListener('click' , () => {
            NavBarIcon.classList.toggle('fa-times');
            NavBar.classList.toggle('show');
        })
    }
}

ShowNavbar('menu' , 'navbar');

const navLink = document.querySelectorAll('.nav-link');
const NavBarIcon = document.getElementById('menu');
function linkAction(){
    const navMenu = document.getElementById('navbar');
    //WHEN WE CLICK ON EACH nav_link, WE NEED TO REMOVE THE show-menu CLASS
    navMenu.classList.remove('show');
    NavBarIcon.classList.remove('fa-times');
}
navLink.forEach(n => n.addEventListener('click' , linkAction));


/*------------------------SCROLL TO TOP BUTTON------------------------*/

const TopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll' , () => {
    if(window.pageYOffset > 200){
        TopButton.classList.add('topActive');
    }
    else{
        TopButton.classList.remove('topActive');
    }
});

TopButton.addEventListener('click' , () => {
    window.scrollTo(0 , 0);
});


/*----------------------Sticky Navbar On Scroll----------------------*/

const StickyNav = document.getElementById('header');
window.addEventListener('scroll' , () => {
    if(window.pageYOffset > 1){
        StickyNav.classList.add('HeaderActive');
    }
    else{
        StickyNav.classList.remove('HeaderActive');
    }
})