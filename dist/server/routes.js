"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var todo_route_1 = require("./api/todo/todo.route");
function setRoutes(app) {
    var router = express.Router();
    todo_route_1.default(router);
    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map