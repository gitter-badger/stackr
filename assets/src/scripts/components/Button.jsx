
const React  = require ('react');

import {ClassSetMixin} from './mixins/ClassSetMixin';

export var Button = React.createClass({

    className: 'btn',
    mixins: [ClassSetMixin],

    render() {

        return (
            <span className={this.getClassName()} onClick={this.props.onClick}>
                {this.props.children}
            </span>
        );

    }

});
