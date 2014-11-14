
var React  = require ('react');

import {Header}          from './Header';
import {Button}          from './Button';
import {Stack}           from './Stack';
import stackActions      from '../actions/StackActions';
import {StackDispatcher} from '../dispatchers/StackDispatcher';

export var App = React.createClass({

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
