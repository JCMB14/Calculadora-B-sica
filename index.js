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