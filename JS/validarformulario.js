/**/
function validar(formulario){
    if (formulario.nombre.value.length<5){
        alert("Escribe más de cinco cacteres en ek campo de nombre");
        formulario.nombre.focus();
        return false;

    }
    var checkOK ="KSFJFJDFJYDFSFDSFKYECFV"+"htudsyfcsjdf";
    var check5tr=formulario.nombre.value;
    var allvalid=true;
    for(var i=0; i<check5tr.length; i++){
        var ch=check5tr.charAt(i);
        for(var j=0; j<checkOK.length; j++)
        if(ch == checkOK.charAt(j))
        break;
        if(j==checkOK.length){
            allvalid=false;
            break;
        }
    }
if(allvalid){
    alert("Escribe solo letras en el campo nombre");
    formulario.nombre.focus();
    return false;
}
var checkOK ="1234567890";
var check5tr=formulario.edad.value;
var allvalid=true;
for(var i=0; i<check5tr.length; i++){
    var ch=check5tr.charAt(i);
    for(var j=0;<checkOK.length; j++)
    if(ch == checkOK.charAt(j))
    break;
    if(j==checkOK.length){
        allvalid=false;
        break;
    }
}
if(allvalid){
alert("scribe solo numeros en el campo nombre");
formulario.nombre.focus();
return false;

}
var txt =formulario.email.value;
var b=/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

alert("Email"+(b.test(txt)?"":"no")+"valido");

return b.test(txt);

} 