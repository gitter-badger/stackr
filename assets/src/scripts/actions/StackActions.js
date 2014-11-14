
import {StackDispatcher} from '../dispatchers/StackDispatcher';

export var trashCard = () => StackDispatcher.pushCard('trash');
export var stackCard = () => StackDispatcher.pushCard('stack');
