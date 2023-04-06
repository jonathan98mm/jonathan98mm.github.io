document.addEventListener("DOMContentLoaded", function(){
    var scrollPosition;
    var servicesStartPosition;
    var containerScrollWidth;
    var logo = document.getElementsByClassName("main-logo")[0];
    var sidebarMenu = document.getElementsByClassName("menu-hide")[0];
    var mainMenu = document.getElementsByClassName("sidebar-menu")[0];
    var mainElement = document.getElementsByTagName("main")[0];
    var footerElement = document.getElementsByTagName("footer")[0];
    var menuLinks = document.getElementsByClassName("menu-links")[0];
    var servicesContainer = document.getElementsByClassName("services-section")[0];
    var servicesImages = document.getElementsByClassName("services-images")[0];

    scrollPosition = window.scrollY;
    servicesStartPosition = servicesContainer.getBoundingClientRect().top;
    containerScrollWidth = servicesImages.scrollWidth - servicesImages.clientWidth;
    var scrollStep = containerScrollWidth / 200;

    if (scrollPosition >= 50) {
        logo.classList.add("main-logo-animation");
    } else {
        logo.classList.remove("main-logo-animation");
    }

    window.addEventListener("scroll", function(){
        scrollPosition = this.scrollY;
        if(scrollPosition >= 50){
            logo.classList.add("main-logo-animation");
        }else{
            logo.classList.remove("main-logo-animation");
        }

        if (scrollPosition >= servicesStartPosition){
            servicesContainer.style.position = "fixed";
            servicesContainer.style.top = 0;
            servicesImages.scrollLeft = (scrollPosition - servicesStartPosition) * scrollStep;
            console.log(servicesImages.scrollLeft);
        }else{
            servicesContainer.style.position = null;
            servicesContainer.style.top = null;
        }
    });

    mainMenu.addEventListener("click", function(){
        mainElement.classList.toggle("element-to-left");
        footerElement.classList.toggle("element-to-left");
        sidebarMenu.classList.toggle("on");
    });

    menuLinks.addEventListener("click", function(){
        sidebarMenu.classList.toggle("on");
        mainElement.classList.toggle("element-to-left");
        footerElement.classList.toggle("element-to-left");
    });
});