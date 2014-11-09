
var cx = require('react/addons').addons.classSet;

var ClassSetMixin = {

    getClassName: function() {

        var classes = {};

        classes[this.className] = !!this.getClassName;
        classes[this.props.className] = !!this.props.className;
        classes['fa fa-' + (this.props.icon || this.iconClass)] = !!(this.props.icon || this.iconClass);

        return cx(classes);

    }


};

module.exports = ClassSetMixin;
