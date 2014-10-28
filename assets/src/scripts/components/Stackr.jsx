
var React = require('react'),
    Card = require('./Card');

var Stackr = React.createClass({

    render: function() {
        return (
            <div className="stckr">
                <Card data={this.props.data[0]} />
            </div>
        );
    }

});

module.exports = Stackr;
