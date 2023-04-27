(function(){
    const openButton = document.querySelector(".nav_menu");
    const menu = document.querySelector(".nav_link"); /*Tomo al elemento nav_link y lo guardo en la variable menu*/
    const closeMenu = document.querySelector(".nav_close");

    openButton.addEventListener("click", ()=>{
        menu.classList.add("nav_link-show"); /*Cuando haga click en el menu, quiero que se le agregue a la clase nav_link la clase .nav_link-show */
    });

    closeMenu.addEventListener("click", ()=>{
        menu.classList.remove("nav_link-show"); /*Si cierro el menu, remuevo la clase */
    });

    menu

})() /*Importante los ultimos parentesis para que funcione*/