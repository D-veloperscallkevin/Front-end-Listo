const imagenes = document.querySelectorAll('.img-galeria'); //Se va a seleccionar todos los elementos que contengan la clase .img-galeria
const imagenesLight = document.querySelector('.agregar-imagen'); //Tomaremos a la imagen que tiene la clase .agregar-imagen
const contenedorLight = document.querySelector('.imagen-light'); //Vamos a seleccionar el contenedor del lightbox 
const boton1 = document.querySelector('.menu');

//console.log(imagenes);
//console.log(imagenesLight);
//console.log(contenedorLight);

imagenes.forEach(imagen =>{ // Cada uno de esos elementos se va a llamar imagen, y quiero que a cada uno le des una accion, y a cada elemento de imagenes que se llama imagen le vamos a agregar un eventlistener de tipo click, la coma significa que cuando alguien le de click a una de las 6 imagenes quiero que se dispare una accion con una funcion flecha
    imagen.addEventListener('click', ()=>{
        //alert("auch, me dolio") //sirve de prueba para ver si las 6 imagenes tienen esa alerta
        //console.log(imagen.getAttribute('src')) //vamos a verificar con imagen.getAttribute('src') para que cuando yo le de click a una imagen, busque la direccion de esa imagen
        aparecerImagen(imagen.getAttribute('src')) //Se pone luego de elaborar la constante aparecerImagen     
    })
}); //Vamos a dejarlo en blanco ya que vamos a ejecutar la funcion en el siguiente const

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){ //!== significa diferente
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        boton1.style.opacity = '1' //style.opacity funciona para ocultar y mostrar el boton de menu
    } 
}); 

const aparecerImagen = (imagen)=>{ //vamos a llamar al parametro imagen
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show') // Quiero que contenedorLight cuando yo le de click a la imagen vamos a decirle que entremos a sus clases (classList) y quiero quitarle y agregarle (toggle) la clase .show y eso es lo que hace ese tipo de cosas
    imagenesLight.classList.toggle('showImage') //Para que aparezca la imagen en agregar-imagen aparece con un scale de 0 y para darle un scale de 1 tenemos que usar la clase showImage en esta funcion que se esta comentando
    boton1.style.opacity = '0' //Aqui el opacity va a ocultar el boton de menu
};