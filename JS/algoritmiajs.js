//Problema 1
function problema1(){
    var p1_input = document.querySelector('#p1-input').value;

 var p1_array = p1_input.split(' ').reverse();
 
 var p1_res = '';

 p1_array.forEach(function(palabra, i){
     if(i !=0 || i !=p1_array.length) p1_res += ' ';
     p1_res += palabra;
 });

 document.querySelector('a3p1-output').textContent = p1_res;
}

//problema 2

function problema2(){
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];


    v1 = v1.sort(function(a,b){
       return b-a;
    });

    v2 = v2.sort(function(a,b){
       return b-a;
    });

    v2 = v2.reverse();
    
    var p2_producto = 0;
    for(var i=0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
        
    }

    document.querySelector('#p2_output').textcontent =
    'Producto escalar minimo:' + p2_producto;

}


//problema 3

function problema(){

var p3_input = document.querySelector('#p3-input').value;
    

    
    if(patron.test(p3_input) == false || /[^ABCDEFGHIJKLMNÑOPQRSTUVWXYZ,]/g.test(p3_input) == true){
        document.querySelector('#p3-output').textContent = "ERROR";
    }
    else{
        

        var p3= p3_input.split(','); 

        var numberi = [];
//Aplicacion de la funcion anonima

        p3.forEach(function (palabras, index){
            var palabras = Array.from(palabras);
            var letras = [];
            
            palabra.forEach(function (letra, index){
                if(letras.includes(letra) == true){
                }else{
                    letras.push(letra);
                    
                }
            });

            numberi.push(letras.length);

        });
        var patron = /[ABCDEFGHIJKLMNÑOPQRSTUVWXYZ,]/g;
//numberi
    }
}
