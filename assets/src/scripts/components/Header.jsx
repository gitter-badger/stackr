
var React = require('react'),
    ClassSetMixin = require('./mixins/ClassSetMixin');

var Header = React.createClass({

    className: 'page-header',
    mixins: [ClassSetMixin],

    render: function() {
        return (
            <header className={this.getClassName()}>
                <h1>{this.props.children}</h1>
            </header>
        );
    }

});

module.exports = Header;
