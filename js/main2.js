document.addEventListener("DOMContentLoaded", function(event){//agregar un escucha .lo soporta desde version js1

  var output = document.getElementById("result");
  var controlpad = document.getElementById("controlpad");
  var button_operators = document.querySelectorAll("#operators button");
  for(var key in button_operators){
    button.addEventListener("click", calculator.check_input);
  }

});
var calculator = {
  op1 : null,
  op2 : null,
  operator : null,
  check_input : function(){
    var input = document.getElementById("input");
    var input_text = input.textContent;//Si hay contenido html en el, devuelve html como texto plano
    var errors = document.querySelector("#error");
    var input_number = Number(input_text);
    if(input_number !== NaN){
        if(this.op1 === null){
          this.op1 = input_number;
        }else {
          this.op2 = input_number;
        }
    }
  }
};





/*window.onload = function(){//recarga cada vez que window se refresca, sobreescribe la información. lo soporta desde html5
  var controlpad = document.getElementById("controlpad");
  console.log("controlpad");
};*/
