import Todo from './todo.model';
import TodoDAO from './todo.dao';

export default class TodoCtrl extends TodoDAO {
    model = Todo;
}
