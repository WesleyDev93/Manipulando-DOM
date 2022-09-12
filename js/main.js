//const subtrair = document.querySelector ('#subtrair');
//const somar = document.querySelector ('#soma');
const braco = document.querySelector ('#braco');

const controle = document.querySelectorAll ('.controle-ajuste');


// controle

controle.forEach ( (elemento) => {

   elemento.addEventListener ('click', function (evento) {
             manipulaDados (evento.target.textContent);
   });

});





// operações

function  manipulaDados (operacao) {
    
   if (operacao === '-') {
    braco.value = parseInt (braco.value) -1;
   } else {
    braco.value = parseInt (braco.value) +1;
   }

}