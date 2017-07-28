import TodoCtrl from './todo.controller';

export default function TodoRoutes(router) {

    const todoCtrl = new TodoCtrl();
    router.route('/todo').get(todoCtrl.fnGetAll);
    router.route('/todo/count').get(todoCtrl.fnCount);
    router.route('/todo').post(todoCtrl.fnInsert);
    router.route('/todo/:id').get(todoCtrl.fnGet);
    router.route('/todo/:id').put(todoCtrl.fnUpdate);
    router.route('/todo/:id').delete(todoCtrl.fnDelete);

}
