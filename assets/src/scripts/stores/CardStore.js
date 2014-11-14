
/* global init:true */

var {Flux}   = require('delorean');
var thunkify = require('thunkify');

console.log(thunkify);

export var CardStore = Flux.createStore({

    cards: init,
    action: null,

    actions: {
        'push-card': 'pushCard'
    },

    pushCard(action) {
        // TODO: Send Ajax
        this.action = action;
        this.cards.shift();

        if(this.cards.length <= 10) {
            this.restock();
        }

        this.emit('change');
    },

    restock() {
        console.log('restock');
    },

    getState() {
        return {
            cards: this.cards,
            action: this.action
        };
    }

});
