
/* global init:true */

var {Flux}   = require('delorean');
var _        = require('lodash');
var thunkify = require('thunkify');
var reqwest  = require('reqwest');

export var CardStore = Flux.createStore({

    cards: init,
    action: null,

    actions: {
        'push-card': 'pushCard'
    },

    pushCard(action) {
        this.action = action;
        this.cards.shift();

        if(this.cards.length <= 10) {
            this.restock();
        }

        this.emit('change');
    },

    restock() {
        let minId = _.min(this.cards, function(card){ return card.id; });
        reqwest({
            url: `/timeline?max_id=${minId.id}`,
            method: 'get',
            success: function (resp) {
                this.cards = this.cards.concat(resp);
            }.bind(this)
        })
    },

    getState() {
        return {
            cards: this.cards,
            action: this.action
        };
    }

});
