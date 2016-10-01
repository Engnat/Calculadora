window.onload = function()
{
  //Variables Definition
  let result;
  let value;
  var number_one;
  var number_two;


  var sumar = function(n1, n2){
     result = parseFloat(n1) + parseFloat(n2);
    return result;
  };

  var restar = function(n1, n2){
    result = parseFloat(n1) - parseFloat(n2);
    return result;
  };

  var multiplicar = function(n1, n2){
    result = parseFloat(n1) * parseFloat(n2);
    return result;
  };

  var dividir = function(n1, n2){
    result = parseFloat(n1) / parseFloat(n2);
    return result;
  };

  var mod = function(n1, n2){
    result = parseFloat(n1) % parseFloat(n2);
    return result;
  };

  //Fields Validations
    while(isNaN(number_one) == true){
      number_one = prompt("Ingrese el primer numero");
    }
    console.log("Numero 1: "+number_one)
    while(isNaN(number_two) == true){
      number_two = prompt("Ingrese el segundo numero");
    }
    console.log("Numero 2: "+number_two)
    //Get operation value
    var operation = prompt("Ingrese operacion a realizar");
    var cond = Number.isNaN(operation);
    if(cond){
      var operation  = param.toLowerCase();
    }


    if(operation === "suma" || operation === "sumar" || operation === "mas" || operation === "+"){
      value = sumar(number_one,number_two);
    }else if(operation === "resta" || operation === "restar" ||operation ==="menos" || operation ==="-"){
      value =  restar(number_one,number_two);
    }else if(operation === "multiplicacion" || operation === "multiplicar" || operation ==="por" || operation ==="*"){
      value =  multiplicar(number_one,number_two);
    }else if(operation === "division" || operation === "dividir" || operation === "dividido" || operation ==="/"){
      value =  dividir(number_one,number_two);
    }else if(operation === "mod" || operation === "modular" || operation ==="%"){
      value =  mod(number_one,number_two);
    }else{
      value = "Error en la operacion";
    }


    document.getElementById("result").innerHTML = value;

}
