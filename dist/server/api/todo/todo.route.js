"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_controller_1 = require("./todo.controller");
function TodoRoutes(router) {
    var todoCtrl = new todo_controller_1.default();
    router.route('/todo').get(todoCtrl.fnGetAll);
    router.route('/todo/count').get(todoCtrl.fnCount);
    router.route('/todo').post(todoCtrl.fnInsert);
    router.route('/todo/:id').get(todoCtrl.fnGet);
    router.route('/todo/:id').put(todoCtrl.fnUpdate);
    router.route('/todo/:id').delete(todoCtrl.fnDelete);
}
exports.default = TodoRoutes;
//# sourceMappingURL=todo.route.js.map