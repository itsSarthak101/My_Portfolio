// Changing NavBar when scroll //
function changeNav(){
    var navbar = document.getElementById('navbar')
    
    var scrollValue = window.scrollY
    if(scrollValue < 100){
        navbar.classList.remove('nav_scrollChange')
    }
    else{
        navbar.classList.add('nav_scrollChange')
    }
}
window.addEventListener('scroll', changeNav)

// Scroll Button //
function scrollWin() {
    window.scrollBy(0, 850)
}
document.querySelector('#scrolldown-btn').addEventListener('click', scrollWin)