//const subtrair = document.querySelector ('#subtrair');
//const somar = document.querySelector ('#soma');


const controle = document.querySelectorAll ('.controle-ajuste');


// controle

controle.forEach ( (elemento) => {

   elemento.addEventListener ('click', function (evento) {
             manipulaDados (evento.target.textContent, evento.target.parentNode );
   });

});





// operações

function  manipulaDados (operacao , controle) {
    const peca = controle.querySelector ('.controle-contador');
    
    
   if (operacao === '-') {
    braco.value = parseInt (braco.value) -1;
   } else {
    braco.value = parseInt (braco.value) +1;
   }

}