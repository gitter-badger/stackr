
var React = require('react');

var Card = React.createClass({

    render: function() {

        return (
            <div className="card">
                <img className="avatar" src={this.props.data.avatarUrl}/>
                <div className="name">{this.props.data.name}</div>
                <div className="username">@{this.props.data.username}</div>
                <div className="text" dangerouslySetInnerHTML={{__html: this.props.data.text}} />
            </div>
        );

    }

});

module.exports = Card;
