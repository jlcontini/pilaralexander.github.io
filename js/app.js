// Menu lateral - mostrar y ocultar
var menu_visible = false
let menu = document.getElementById("nav")
function mostrarOcultarMenu(){
  if (menu_visible==false){
    menu.style.display = "block";
    menu_visible = true;
  }
  else{
    menu.style.display = "none";
    menu_visible = false;
  }
}

// Animación de barritas
function crearBarra(id_barra){
  for(i = 0; i <=16; i++){
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
  }
}

//Seleccionar barras generales para luego manejarlas
let html = document.getElementById("html");
crearBarra(html);
let css = document.getElementById("css");
crearBarra(css);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let paint3d = document.getElementById("paint3d");
crearBarra(paint3d);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let proactividad = document.getElementById("proactividad");
crearBarra(proactividad);
let adaptabilidad = document.getElementById("adaptabilidad");
crearBarra(adaptabilidad);
let comunicacionasertiva = document.getElementById("comunicacionasertiva");
crearBarra(comunicacionasertiva);
let capacidaddeescucha = document.getElementById("capacidaddeescucha");
crearBarra(capacidaddeescucha);


//Guardar cantidad de cuadrados que se van pintando por barra
let contadores = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,];
//Variable de aviso si funciona
let entro = false;

//Función que aplica animación
function efectoHabilidades(){
  var habilidades = document.getElementById("habilidades");
  var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
  if(distancia_skills >= 300 && entro == false){
    entro = true;
    const intervalHtml = setInterval(function(){
      pintarBarra(html, 16, 0, intervalHtml);
    }, 100)
  }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
  contadores[indice]++;
  x = contadores[indice];
  if(x < cantidad){
    let elementos = id_barra.getElementByClassName("e");
    elementos[x].style.backgroundColor = "#7164d3";
    }else{
      clearInterval(interval)
    }
}

//Detectar scroll para animación
window.onscroll = function(){
  efectoHabilidades();
}
