const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton =>{
    boton.addEventListener("click", ()=>{
        const clickBoton = boton.textContent;

        if(boton.id === "btn_c"){
            pantalla.textContent = "0";
            return;
        }

        if(boton.id === "btn_del"){
            if(pantalla.textContent.length === 1){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        if(boton.id === "btn_igual"){
            try{
               pantalla.textContent = eval(pantalla.textContent);   
            }catch{
                pantalla.textContent = "Syntax error";
            }

            return;
        }
        if(pantalla.textContent === "0"){
            pantalla.textContent = clickBoton;
        }else{
            pantalla.textContent += clickBoton;   
        }

    })
})


document.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.getElementById('cambio');
    let calculadora = document.getElementById('miCalculadora');
    let pantallacambio = document.getElementById('mipantalla');
    let botoncambio = document.getElementById('btn_c');
    let botoncambio2 = document.getElementById('btn_del');
    let botoncambio3 = document.getElementById('btn_0');  
    let botoncambio4 = document.getElementById('btn_id1');
    let botoncambio5 = document.getElementById('btn_id2'); 
    let botoncambio6 = document.getElementById('btn_id3'); 
    let botoncambio7 = document.getElementById('btn_id4'); 
    let botoncambio8 = document.getElementById('btn_id5'); 
    let botoncambio9 = document.getElementById('btn_id6'); 
    let botoncambio10 = document.getElementById('btn_id7'); 
    let botoncambio11 = document.getElementById('btn_id8');
    let botoncambio12 = document.getElementById('btn_id9'); 
    let botoncambio13 = document.getElementById('btn_id10'); 
    let botoncambio14 = document.getElementById('btn_id11'); 
    let botoncambio15 = document.getElementById('btn_id12'); 
    let botoncambio16 = document.getElementById('btn_id13');  
    let botoncambio17 = document.getElementById('btn_id14'); 




    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        calculadora.classList.add('cambiar_color');
        pantallacambio.classList.add('cambiar_pantalla');
        botoncambio.classList.add('cambiar_boton');
        botoncambio2.classList.add('cambiar_boton');
        botoncambio3.classList.add('cambiar_boton');
        botoncambio4.classList.add('cambiar_boton');
        botoncambio5.classList.add('cambiar_boton');
        botoncambio6.classList.add('cambiar_boton');
        botoncambio7.classList.add('cambiar_boton');
        botoncambio8.classList.add('cambiar_boton');
        botoncambio9.classList.add('cambiar_boton');
        botoncambio10.classList.add('cambiar_boton');
        botoncambio11.classList.add('cambiar_boton');
        botoncambio12.classList.add('cambiar_boton');
        botoncambio13.classList.add('cambiar_boton');
        botoncambio14.classList.add('cambiar_boton');
        botoncambio15.classList.add('cambiar_boton');
        botoncambio16.classList.add('cambiar_boton');
        botoncambio17.classList.add('cambiar_boton');
      } else {
        calculadora.classList.remove('cambiar_color');
        pantallacambio.classList.remove('cambiar_pantalla');
        botoncambio.classList.remove('cambiar_boton');
        botoncambio2.classList.remove('cambiar_boton');
        botoncambio3.classList.remove('cambiar_boton');
        botoncambio4.classList.remove('cambiar_boton');
        botoncambio5.classList.remove('cambiar_boton');
        botoncambio6.classList.remove('cambiar_boton');
        botoncambio7.classList.remove('cambiar_boton');
        botoncambio8.classList.remove('cambiar_boton');
        botoncambio9.classList.remove('cambiar_boton');
        botoncambio10.classList.remove('cambiar_boton');
        botoncambio11.classList.remove('cambiar_boton');
        botoncambio12.classList.remove('cambiar_boton');
        botoncambio13.classList.remove('cambiar_boton');
        botoncambio14.classList.remove('cambiar_boton');
        botoncambio15.classList.remove('cambiar_boton');
        botoncambio16.classList.remove('cambiar_boton');
        botoncambio17.classList.remove('cambiar_boton');
      }
    });
  });