"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoDAO = (function () {
    function TodoDAO() {
        var _this = this;
        // Get all
        this.fnGetAll = function (req, res) {
            _this.model.find({}, function (err, docs) {
                if (err) {
                    res.status(400).json(err);
                }
                res.status(200).json(docs);
            });
        };
        // Count all
        this.fnCount = function (req, res) {
            _this.model.count(function (err, count) {
                if (err) {
                    res.status(400).json(err);
                }
                res.status(200).json(count);
            });
        };
        // Insert
        this.fnInsert = function (req, res) {
            var obj = new _this.model(req.body);
            obj.save(function (err, item) {
                if (err) {
                    res.status(400).json(err);
                }
                res.status(200).json(item);
            });
        };
        // Get by id
        this.fnGet = function (req, res) {
            _this.model.findOne({ _id: req.params.id }, function (err, obj) {
                if (err) {
                    res.status(400).json(err);
                }
                res.status(200).json(obj);
            });
        };
        // Update by id
        this.fnUpdate = function (req, res) {
            _this.model.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, obj) {
                if (err) {
                    res.status(400).json(err);
                }
                res.status(200).json(obj);
            });
        };
        // Delete by id
        this.fnDelete = function (req, res) {
            _this.model.findOneAndRemove({ _id: req.params.id }, function (err) {
                if (err) {
                    res.status(400).json(err);
                }
                res.sendStatus(200);
            });
        };
    }
    return TodoDAO;
}());
exports.default = TodoDAO;
//# sourceMappingURL=todo.dao.js.map