
var React = require('react'),
    Header = require('./Header'),
    Button = require('./Button'),
    Stack = require('./Stack'),
    stackActions = require('../actions/StackActions'),
    StackDispatcher = require('../dispatchers/StackDispatcher');

var App = React.createClass({

    render: function() {
        return (
            <div className="stckr">
                <Header>stackr</Header>
                <div className="stacks">

                    <div className="main-stack">
                        <Stack cards={this.props.data} dispatcher={StackDispatcher} />
                        <div className="buttons">
                            <Button className="trash" icon="trash" onClick={this.onTrashClick}/>
                            <Button className="thumb" icon="thumbs-up" onClick={this.onThumbClick}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    },

    onTrashClick: function() {
        stackActions.trashCard();
    },

    onThumbClick: function() {
        stackActions.stackCard();
    }

});

module.exports = App;
