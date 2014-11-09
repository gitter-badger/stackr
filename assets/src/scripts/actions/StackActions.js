
var StackDispatcher = require('../dispatchers/StackDispatcher');

var StackActions = {

    trashCard: function() {
        StackDispatcher.pushCard('trash');
    },

    stackCard: function() {
        StackDispatcher.pushCard('stack');
    }

};

module.exports = StackActions;