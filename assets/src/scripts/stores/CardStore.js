
/* global init:true */

var Flux = require('delorean').Flux;

var CardStore = Flux.createStore({

    cards: init,

    actions: {
        'push-card': 'pushCard'
    },

    pushCard: function(action) {
        // TODO: Send Ajax
        this.cards.shift();
        this.emit('change');
    },

    getState: function() {
        return { cards: this.cards };
    }

});

module.exports = CardStore;
