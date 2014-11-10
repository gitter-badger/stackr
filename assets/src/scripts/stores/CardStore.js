
/* global init:true */

var Flux = require('delorean').Flux;

var CardStore = Flux.createStore({

    cards: init,
    action: null,

    actions: {
        'push-card': 'pushCard'
    },

    pushCard: function(action) {
        // TODO: Send Ajax
        this.action = action;
        this.cards.shift();
        this.emit('change');
    },

    getState: function() {
        return {
            cards: this.cards,
            action: this.action
        };
    }

});

module.exports = CardStore;
