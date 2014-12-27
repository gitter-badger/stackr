
/* global init:true */

var {Flux}   = require('delorean');
var thunkify = require('thunkify');
var reqwest  = require('reqwest');

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
        reqwest('path/to/html', function (resp) {
          console.log(resp);
        });
    },

    getState() {
        return {
            cards: this.cards,
            action: this.action
        };
    }

});
