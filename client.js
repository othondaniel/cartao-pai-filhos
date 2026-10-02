
console.log("Cartão Pai e Filhos: iniciando...");

window.TrelloPowerUp.initialize({

  'card-buttons': function(t, options) {

    console.log("Capacidade card-buttons carregada!");

    return [{

      text: 'Cartão Pai e Filhos',

      condition: 'always',

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
