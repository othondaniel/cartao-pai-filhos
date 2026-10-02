
console.log("DIAGNOSTICO: client.js carregado");

window.addEventListener("error", function(event) {
  console.error("ERRO JAVASCRIPT:", event.message);
});

if (!window.TrelloPowerUp) {

  console.error("ERRO: TrelloPowerUp não foi encontrado!");

} else {

  console.log("DIAGNOSTICO: biblioteca Trello encontrada");

  try {

    window.TrelloPowerUp.initialize({

      'card-buttons': function(t) {

        console.log("DIAGNOSTICO: card-buttons executado");

        return [{
          text: 'Cartão Pai e Filhos',

          callback: function(t) {
            return t.popup({
              title: 'Cartão Pai e Filhos',
              url: 'https://othondaniel.github.io/cartao-pai-filhos/filhos.html',
              height: 300
            });
          }
        }];

      }

    });

    console.log("DIAGNOSTICO: initialize executado");

  } catch (erro) {

    console.error("ERRO NA INICIALIZAÇÃO:", erro);

  }

}
