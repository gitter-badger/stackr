
var React = require('react/addons'),
    ClassSetMixin = require('./mixins/ClassSetMixin'),
    Flux = require('delorean').Flux,
    Card = require('./Card'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Stack = React.createClass({

    className: 'stack',
    mixins: [ClassSetMixin, Flux.mixins.storeListener],

    getCard: function(card, className) {
        return <Card key={card.id} className={className} data={card} />;
    },

    getTransitionName: function() {
        return 'card-stack-' + this.getStore('cards').action;
    },

    render: function() {

        var cards = this.getStore('cards').cards;

        return (
            <div className={this.getClassName()}>
                <ReactCSSTransitionGroup transitionEnter={false} transitionName={this.getTransitionName()}>
                    {this.getCard(cards[0], 'current')}
                    {this.getCard(cards[1], 'next'   )}
                    {this.getCard(cards[2], 'next-2' )}
                    {this.getCard(cards[3], 'next-3' )}
                </ReactCSSTransitionGroup>
            </div>
        );

    }

});

module.exports = Stack;
