function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado==8) return true;
    var patron = /[0-9\d .]/;
    var prueba= String.fromCharCode(teclado);
    return patron.test(prueba);

}


function interes(){
    var valor = document.formulario.cantidad.value;
    var resultado = resultado*0.02;
    var total = resultado + interes;
    
    document.formulario.sueldoti.value="$"+total;
}

function borrar{
    
}