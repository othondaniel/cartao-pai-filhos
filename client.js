window.TrelloPowerUp.initialize({

  'card-buttons': function(t) {

    return [{
      text: 'Cartão Pai e Filhos',
      condition: 'always',

      callback: function(t) {

        return t.popup({
          title: 'Cartão Pai e Filhos',
          url: './filhos.html',
          height: 500
        });

      }
    }];

  }

});
