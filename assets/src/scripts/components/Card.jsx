
var React = require('react');

import {ClassSetMixin} from './mixins/ClassSetMixin';

export var Card = React.createClass({

    className: 'card',
    mixins: [ClassSetMixin],

    getImage: function() {
        if(this.props.data.image) {
            return (
                <div className="img-container">
                    <img src={this.props.data.image}/>
                </div>
            );
        }
    },

    render: function() {

        return (
            <div className={this.getClassName()}>

                <header>
                    <img className="avatar" src={this.props.data.avatarUrl}/>
                    <div className="names">
                        <strong className="name">{this.props.data.name}</strong>
                        <em className="username">@{this.props.data.username}</em>
                    </div>
                </header>

                <div className="text" dangerouslySetInnerHTML={{__html: this.props.data.text}} />
                <div className="timeAgo">{this.props.data.timeAgo}</div>

                {this.getImage()}

                <footer>
                    <span className="rt"><strong>{this.props.data.rtCount}</strong> RETWEETS</span>
                    <span className="fav"><strong>{this.props.data.favCount}</strong> FAVOURITES</span>
                </footer>

            </div>
        );

    }

});
