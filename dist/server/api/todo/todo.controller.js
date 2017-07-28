"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var todo_model_1 = require("./todo.model");
var todo_dao_1 = require("./todo.dao");
var TodoCtrl = (function (_super) {
    __extends(TodoCtrl, _super);
    function TodoCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = todo_model_1.default;
        return _this;
    }
    return TodoCtrl;
}(todo_dao_1.default));
exports.default = TodoCtrl;
//# sourceMappingURL=todo.controller.js.map