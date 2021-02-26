//accedo al hight(largo) completo de la pag- le resto el tamaño completo del vh(la ventana q se muestra en la pantalla)
const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');//la imagen q deplazare

//cada vez q el usuario haga scroll
window.onscroll =()=>{
  const anchoFondo = (window.pageYOffset / altura) * 800;

  //para q no pase los 100 en el ancho , se visualiza enn elemnto
  if(anchoFondo <= 100){
    fondo.style.width = anchoFondo + '%';
  }
}












