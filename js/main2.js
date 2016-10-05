var calculator = {
  result : null,
  operator : null,
  check_input : function(){//validan que los valores del input
    console.log("check Input");
    var self = calculator;
    var input = document.getElementById("input");
    var input_text = input.value;//Si hay contenido html en el, devuelve html como texto plano
    var errors = document.querySelector("#error");
    var input_number = Number(input_text);
    if(Number.isNaN(input_number)){
        input.value = "";
    }
  },
  set_number: function(button){//obtenemos el valor del boton que seleccionemos
    return function(){
      var self = calculator;
      var input = document.getElementById("input");
      input.value = "" + input.value + button.textContent;//concatenamos los valores .agrega lo que tenia + lo que se esta oprimiendo
    };//return
  },//set_number
  set_operator : function(button){
    return function(){
      var self = calculator;
      if(self.result === null){

      }
      self.operator = button.textContent;
    };
  },//set_operator
  clear: function(){
    var self = calculator;
    self.result = null;
    self.operator=null;
    var input = document.getElementById("input");
    input.value = "";
  },//clear
};

document.addEventListener("DOMContentLoaded", function(event){//agregar un escucha .lo soporta desde version js1
  //una vez la página se haya recargado
  var output = document.getElementById("result");
  var controlpad = document.getElementById("controlpad");
  var button_operators = controlpad.querySelectorAll("#operators button");
  var i;
  for(i =0; i<button_operators.length; i++){
    button_operators[i].addEventListener("click", calculator.set_operator(button_operators[i]));
  }
  var button_numbers = controlpad.querySelectorAll("#numbers button");
  var input = document.getElementById("input");
  for(i=0 ; i<button_numbers.length; i++){
    button_numbers[i].addEventListener(
      "click" ,
       calculator.set_number(button_numbers[i])
     );//addEventListener*/
  }

var button_clear = controlpad.querySelector("#clear");
button_clear.addEventListener("click", calculator.clear);
  console.log("Initiated");
});




/*window.onload = function(){//recarga cada vez que window se refresca, sobreescribe la información. lo soporta desde html5
  var controlpad = document.getElementById("controlpad");
  console.log("controlpad");
};*/
