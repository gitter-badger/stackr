
const {classSet} = require('react/addons').addons;

export var ClassSetMixin = {

    getClassName() {

        var classes = {
            [this.className]: !!this.className
        };

        classes[this.props.className] = !!this.props.className;
        classes[`fa fa-${this.props.icon || this.iconClass}`] = !!(this.props.icon || this.iconClass);

        return classSet(classes);

    }

};
