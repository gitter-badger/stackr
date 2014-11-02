
var React = require('react');

var Header = React.createClass({

    getClassName: function() {
        return 'page-header';
    },

    render: function() {
        return (
            <header className={this.getClassName()}>
                <h1>stackr</h1>
            </header>
        );
    }

});

module.exports = Header;
