(function(){ //funcion autoinvocada para proteger el codigo de otros archivos.
    const titleQuestions = [...document.querySelectorAll(".questions_title")];
    console.log(titleQuestions);

    //Iterar las preguntas
    titleQuestions.forEach(question =>{
        question.addEventListener("click", ()=>{
            let height = 0;
            let answer = question.nextElementSibling//Obtener al hermano o al siguiente hermano de question. El hermano del titulo h3 (pregunta) es el parrafo (respuesta).
            let addPadding = question.parentElement.parentElement; //Que obtenga a la pregunta, que es el elemento questions_title, y que obtenga al padre de esa pregunta que es el div questions_answer y que obtenga a su padre, que es el elemento articulo questions_padding.

            addPadding.classList.toggle(".questions_padding-add"); //Del elemento questions_padding, que tiene la variable addPadding, voy a obtener sus clases y quiero agregarle o quitarle la clase dependiendo si la tiene, la clase questions_paddin-add.


            question.children[0].classList.toggle("questions_arrow-rotate"); //Del elemento question quiero obtener a su primer hijo 0, quiero obtener sus clases y agregarle o quitarle dependiendo si la tiene o no la clase questions_arrow-rotate
            
            if(answer.clientHeight === 0){
                height = answer.scrollHeight; //Si el height es 0, quiero que la respuesta tenga el alto minimo para que se muestre.
                //Se tuvo que agregar un elemento questions_padding para que haya un padding debajo de la respuesta porque sino, esta funcion solo habria dado el espacio justo del texto
            }

            answer.style.height = `${height}px` //Si es verdad, quiero agregar el height a la answer con el valor `${height}px`
        })
    })
})();