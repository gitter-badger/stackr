
var {Flux} = require('delorean');

import {CardStore} from '../stores/CardStore';

export var StackDispatcher = Flux.createDispatcher({

    pushCard: function (action) {
        this.dispatch('push-card', action);
    },

    getStores: function () {
        return {
            cards: new CardStore()
        };
    }

});
