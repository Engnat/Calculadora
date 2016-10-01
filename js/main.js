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
};
