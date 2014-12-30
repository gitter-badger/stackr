
/* global init:true */

const
    {Flux}    = require('delorean'),
    _         = require('lodash'),
    co        = require('co'),
    Immutable = require('immutable'),
    reqwest   = require('reqwest');

export var CardStore = Flux.createStore({

    cards: Immutable.OrderedSet(init),
    action: null,

    actions: {
        'push-card': 'pushCard'
    },

    pushCard(action) {
        this.action = action;
        this.cards = this.cards.rest();

        // When there is less than 10 cards in stock, it's time to restock!
        if(this.cards.size <= 10) {
            co(this.restock.bind(this));
        }

        this.emit('change');
    },

    restock: function*() {
        // Get minimum id
        let minId = this.cards.minBy(card => card.id).id;

        // Load tweets before oldest tweet in current stack
        let cards = yield reqwest({
            url: `/timeline?max_id=${minId}`,
            method: 'get'
        });

        // Add loaded cards to current array
        this.cards = this.cards.concat(cards);
    },

    getState() {
        return {
            cards: this.cards.toJS(),
            action: this.action
        };
    }

});
