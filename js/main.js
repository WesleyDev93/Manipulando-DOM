//const subtrair = document.querySelector ('#subtrair');
//const somar = document.querySelector ('#soma');


const controle = document.querySelectorAll ('[data-controle]');


// controle

controle.forEach ( (elemento) => {

   elemento.addEventListener ('click', (evento) => {
             manipulaDados(evento.target.dataset.controle, evento.target.parentNode );
   });

});





// operações

function  manipulaDados (operacao, controle) {
    const peca = controle.querySelector ('.controle-contador');
    
    
   if (operacao === '-') {
    braco.value = parseInt (braco.value) -1;
   } else {
    braco.value = parseInt (braco.value) +1;
   }

}