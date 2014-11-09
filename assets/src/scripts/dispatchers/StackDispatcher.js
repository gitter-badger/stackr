
var Flux = require('delorean').Flux,
    CardStore = require('../stores/CardStore');

var StackDispatcher = Flux.createDispatcher({

    pushCard: function (action) {
        this.dispatch('push-card', action);
    },

    getStores: function () {
        return {
            cards: new CardStore()
        };
    }

});

module.exports = StackDispatcher;
