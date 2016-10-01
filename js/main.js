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

  //Fields Validations
  while(isNaN(number_one) === true){
    number_one = prompt("Ingrese el primer numero");
  }

  while(isNaN(number_two) === true){
    number_two = prompt("Ingrese el segundo numero");
  }

  //Get operation value
  operationInput = prompt("Ingrese operacion a realizar");
  var cond = Number.isNaN(operationInput);
  if(cond){
    operationInput  = param.toLowerCase();
  }


  if(operationInput === "suma" || operationInput === "mas" || operationInput === "+"){
    value = sumar(number_one,number_two);
  }else if(operationInput === "resta" || operationInput ==="menos" || operationInput ==="-"){
    value =  restar(number_one,number_two);
  }else if(operationInput === "multiplicar" || operationInput ==="por" || operationInput ==="*"){
    value =  multiplicar(number_one,number_two);
  }else if(operationInput === "dividir" || operationInput ==="/"){
    value =  dividir(number_one,number_two);
  }else{
    value = "Error en la operacion";
  }


  document.getElementById("result").innerHTML = value;

};
