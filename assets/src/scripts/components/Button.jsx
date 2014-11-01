
var React = require('react');

var Button = React.createClass({

    getClassName: function() {

        var className ='btn ' + this.props.className;

        if(this.props.icon) {
            className += ' fa fa-' +  this.props.icon;
        }

        return className;
    },

    render: function() {
        return (
            <span className={this.getClassName()}></span>
        );
    }

});

module.exports = Button;
