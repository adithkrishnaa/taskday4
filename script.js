function bgcochange() {
    var navbar = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    if(scrollValue < 130){
        navbar.classList.remove('bgcolor');
    }
    else{
        navbar.classList.add('bgcolor');
    }
}


window.addEventListener('scroll',bgcochange);