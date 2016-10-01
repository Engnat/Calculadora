window.onload = function()
{
  //Variables Definition
  let result;
  let value;
  var number_one;
  var number_two;
  var operationInput;

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
    while(isNaN(number_one) === true){
      number_one = prompt("Ingrese el primer numero");
    }
    console.log("Numero 1: " + number_one);
    while(isNaN(number_two) === true){
      number_two = prompt("Ingrese el segundo numero");
    }
    console.log("Numero 2: "+number_two);
    //Get operation value
    operationInput = prompt("Ingrese operacion a realizar");
    var cond = Number.isNaN(operationInput);
    if(cond){
      operationInput  = param.toLowerCase();
    }


    if(operationInput === "suma" || operationInput === "sumar" || operationInput === "mas" || operationInput === "+"){
      value = sumar(number_one,number_two);
    }else if(operationInput === "resta" || operationInput === "restar" ||operationInput ==="menos" || operationInput ==="-"){
      value =  restar(number_one,number_two);
    }else if(operationInput === "multiplicacion" || operationInput === "multiplicar" || operationInput ==="por" || operationInput ==="*"){
      value =  multiplicar(number_one,number_two);
    }else if(operationInput === "division" || operationInput === "dividir" || operationInput === "dividido" || operationInput ==="/"){
      value =  dividir(number_one,number_two);
    }else if(operationInput === "mod" || operationInput === "modular" || operationInput ==="%"){
      value =  mod(number_one,number_two);
    }else{
      value = "Error en la operacion";
    }


    document.getElementById("result").innerHTML = value;

};
