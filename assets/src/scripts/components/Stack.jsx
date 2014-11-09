
var React = require('react'),
    ClassSetMixin = require('./mixins/ClassSetMixin'),
    Flux = require('delorean').Flux,
    Card = require('./Card');

var Stack = React.createClass({

    className: 'stack',
    mixins: [ClassSetMixin, Flux.mixins.storeListener],

    render: function() {

        var cards = this.getStore('cards').cards;

        return (
            <div className={this.getClassName()}>
                <Card className="current" data={cards[0]} />
                <Card className="next"    data={cards[1]} />
                <Card className="next-2"  data={cards[2]} />
                <Card className="next-3"  data={cards[3]} />
            </div>
        );

    }

});

module.exports = Stack;
