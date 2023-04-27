(function(){ //La funcion se llama a si misma para proteger al codigo del resto de archivos JS y que solo tome al body
    const sliders = [...document.querySelectorAll(".testimony_body")];//Los tres puntos son para que sean un arreglo. Tomara todos los elementos del body
    const buttonNext = document.querySelector("#next");
    const buttonBefore = document.querySelector("#before");
    let value;

    buttonNext.addEventListener("click", () =>{ //Agregar una funcion cuando haga click
        changePosition(1);
    })

    buttonBefore.addEventListener("click", () =>{
        changePosition(-1);
    })

    const changePosition = (add) /*Argumento*/ =>{
        const currentTestimony = document.querySelector(".testimony_body-show").dataset.id; //Tomara el elemento body show y obtendre su ID
        value = Number(currentTestimony); //Value va a ser igual al slider que este expuesto actualmente. Number para convertir a numero el elemento
        value+= add; //Se lo sumara al valor que le pasamos a la funcion
        
        sliders[Number(currentTestimony)-1].classList.remove("testimony_body-show"); 

        if(value == sliders.length+1 || value === 0) {//Sliders.length me dice cuantos elementos tengo en el arreglo 
            value = value === 0 ? sliders.length : 1 //Si el valor del slider llega a ser 0, nos enviara al ultimo slider (slider.length), y sino, nos enviara al 1
        }
        
        sliders[value-1].classList.add("testimony_body-show"); //Accedo al elemento value, dentro del elemento sliders. Se pone -1 porque los elementos se empiezan a contar desde el 0. Luego quiero obtener sus clases y agregar la clase body show. Antes de esto tuve que remover la clase body-show
    }

})();