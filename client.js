
console.log("Iniciando Power-Up...");

if (window.TrelloPowerUp) {

  console.log("Biblioteca Trello carregada!");

  window.TrelloPowerUp.initialize({

    'card-buttons': function(t) {

      console.log("Capacidade card-buttons executada!");

      return [];

    }

  });

  console.log("Inicialização solicitada!");

} else {

  console.error("Biblioteca Trello não encontrada!");

}
