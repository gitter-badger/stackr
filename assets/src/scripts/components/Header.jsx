
var React = require('react');

import {ClassSetMixin} from './mixins/ClassSetMixin';

export var Header = React.createClass({

    className: 'page-header',
    mixins: [ClassSetMixin],

    render() {
        return (
            <header className={this.getClassName()}>
                <h1>{this.props.children}</h1>
            </header>
        );
    }

});
