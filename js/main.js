document.querySelector("#hora").value = new Date();
var boton = document.querySelector("#submit");
boton.addEventListener('click', function(){
    var frase = document.querySelector("#oracion").value.toString();
    frase = frase.replace(/ /g, "")
    var matriz = [];
    var contador = parseInt(frase.length);
    for(var i = 0; i <= contador; i++){
        matriz.push(frase[i]);
    }

    var i=contador-1;
    var valida = 0;
    var lomismo = "";
    for(var x = 0; x < contador; x++)
    {
        lomismo= lomismo +"Letra Ida: [" + matriz[x] + "] Letra vuelta: [" + matriz[i] + "] <br>";
        if(matriz[x]===matriz[i]){
            console.log(x+" Letra concuerda")
            i--;
            valida++;
            continue;
        }else{
            alert("Tu palabra no es palindroma");
            break;
        }
    }
    document.querySelector(".palabra").innerHTML = lomismo
    console.log(contador);
    console.log(valida);
    if(contador == valida){
        alert("Tu palabra si es palindroma");
    }
    
});