
var React = require('react'),
    ClassSetMixin = require('./mixins/ClassSetMixin');

var Button = React.createClass({

    className: 'btn',
    mixins: [ClassSetMixin],

    render: function() {

        return (
            <span className={this.getClassName()} onClick={this.props.onClick}>
                {this.props.children}
            </span>
        );

    }

});

module.exports = Button;
