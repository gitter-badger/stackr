
/* global init:true */

var {Flux} = require('delorean');

export var CardStore = Flux.createStore({

    cards: init,
    action: null,

    actions: {
        'push-card': 'pushCard'
    },

    pushCard: function(action) {
        // TODO: Send Ajax
        this.action = action;
        this.cards.shift();

        if(this.cards.length <= 10) {
            this.restock();
        }

        this.emit('change');
    },

    restock: function() {
        console.log('restock');
    },

    getState: function() {
        return {
            cards: this.cards,
            action: this.action
        };
    }

});
