document.addEventListener("DOMContentLoaded", function(){
    var navbar = document.getElementsByTagName("nav")[0];

    document.addEventListener("scroll", function(){
        if (window.scrollY > 100){
            navbar.classList.add("Navbar__Active");
        }else{
            navbar.classList.remove("Navbar__Active");
        }
    });
});