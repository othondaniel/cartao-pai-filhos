
window.TrelloPowerUp.initialize({

  'card-buttons': function(t) {

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
