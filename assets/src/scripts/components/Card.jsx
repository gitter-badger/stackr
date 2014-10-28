
var React = require('react');

var Card = React.createClass({

    render: function() {

        return (
            <div className="card">

                <header>
                    <img className="avatar" src={this.props.data.avatarUrl}/>
                    <div className="names">
                        <strong className="name">{this.props.data.name}</strong>
                        <em className="username">@{this.props.data.username}</em>
                    </div>
                </header>

                <div className="text" dangerouslySetInnerHTML={{__html: this.props.data.text}} />
                <div className="timeAgo">{this.props.data.timeAgo}</div>

                <footer>
                    <span className="rt"><strong>{this.props.data.rtCount}</strong> RETWEETS</span>
                    <span className="fav"><strong>{this.props.data.favCount}</strong> FAVOURITES</span>
                </footer>

            </div>
        );

    }

});

module.exports = Card;
