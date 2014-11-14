
const React  = require ('react/addons'),
    {Flux} =  require('delorean'),
    {CSSTransitionGroup} = React.addons;

import {ClassSetMixin} from './mixins/ClassSetMixin';
import {Card}          from './Card';


export var Stack = React.createClass({

    className: 'stack',
    mixins: [ClassSetMixin, Flux.mixins.storeListener],

    getCard(card, className) {
        if(card) {
            return <Card key={card.id} className={className} data={card} />;
        }
    },

    render() {

        let {cards, action} = this.getStore('cards');

        return (
            <div className={this.getClassName()}>
                <CSSTransitionGroup transitionEnter={false} transitionName={`card-stack-${action}`}>
                    {this.getCard(cards[0], 'current')}
                    {this.getCard(cards[1], 'next'   )}
                    {this.getCard(cards[2], 'next-2' )}
                    {this.getCard(cards[3], 'next-3' )}
                </CSSTransitionGroup>
            </div>
        );

    }

});
