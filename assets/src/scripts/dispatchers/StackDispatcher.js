
var {Flux} = require('delorean');

import {CardStore} from '../stores/CardStore';

export var StackDispatcher = Flux.createDispatcher({

    pushCard(action) {
        this.dispatch('push-card', action);
    },

    getStores() {
        return {
            cards: new CardStore()
        };
    }

});
