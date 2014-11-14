
var React  = require ('react');

import {Header}          from './Header';
import {Button}          from './Button';
import {Stack}           from './Stack';
import {StackDispatcher} from '../dispatchers/StackDispatcher';
import {trashCard, stackCard} from '../actions/StackActions';

export var App = React.createClass({

    render() {

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

    onTrashClick() {
        trashCard();
    },

    onThumbClick() {
        stackCard();
    }

});
