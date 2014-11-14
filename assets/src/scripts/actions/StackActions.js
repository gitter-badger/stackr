
import {StackDispatcher} from '../dispatchers/StackDispatcher';

export var trashCard = function() {
    StackDispatcher.pushCard('trash');
};

export var stackCard = function() {
    StackDispatcher.pushCard('stack');
};
