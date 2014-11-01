
var React = require('react'),
    Card = require('./Card'),
    Button = require('./Button');

var Stackr = React.createClass({

    render: function() {
        return (
            <div className="stckr">
                <div className="main-stack">
                    <div className="stack">
                        <Card data={this.props.data[0]} />
                    </div>
                    <div className="buttons">
                        <Button className="trash" icon="trash-o"/>
                        <Button className="thumb" icon="thumbs-up"/>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Stackr;
