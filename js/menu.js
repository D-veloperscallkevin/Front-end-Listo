const boton = document.querySelector('.menu'); // Vamos a usar el query selector para llamar a la clase .menu que esta en el html, el punto es como llamarlo desde un css

const menu = document.querySelector('.menu-navegacion');

//console.log(menu);
//console.log(boton);

//En este caso vamos a crear un evento con hamburguer

//Tenemos que agregar un evento de tipo 'click' y quiero que cuando nosotros le demos click al icono de menu se desate una funcion flecha y dentro de la funcion flecha quiero que arroje una alerta que diga "click" para hacer una prueba de debbuggin si esta funcionando correctamente, pero despues lo vamos a borrar y vamos a poner lo mas importante dentro de la funcion flecha
boton.addEventListener('click', () =>{
    menu.classList.toggle("spread")     //al boton quiero que se seleccione las clases y con toggle quiero que le agregues y le quites "spread", entonces cada vez que toquemos el boton de menu, vamos a quitarle o vamos a ponerle la clase, dependiendo de si la tiene o no la tiene
})

window.addEventListener('click', e=> { //Vamos a usar el parametro e
    //console.log(e.target) //e.target sirve para saber a que elemento le esta dando click, se va a ejecutar cada que yo le de click a cualquier parte de la pantalla
    if(menu.classList.contains('spread') && e.target != menu && e.target != boton ){  //!= significa diferente, para que esto se cumpla, tenemos que dar click a algo diferente a menu o boton. 
    menu.classList.toggle("spread")
    }}
)