abstract class TodoDAO {

    abstract model: any;

    // Get all
    fnGetAll = (req, res) => {
        this.model.find({}, (err, docs) => {
            if (err) {
                res.status(400).json(err);
            }
            res.status(200).json(docs);
        });
    };

    // Count all
    fnCount = (req, res) => {
        this.model.count((err, count) => {
            if (err) {
                res.status(400).json(err);
            }
            res.status(200).json(count);
        });
    };

    // Insert
    fnInsert = (req, res) => {
        const obj = new this.model(req.body);
        obj.save((err, item) => {
            if (err) {
                res.status(400).json(err);
            }
            res.status(200).json(item);
        });
    };

    // Get by id
    fnGet = (req, res) => {
        this.model.findOne({_id: req.params.id}, (err, obj) => {
            if (err) {
                res.status(400).json(err);
            }
            res.status(200).json(obj);
        });
    };

    // Update by id
    fnUpdate = (req, res) => {
        this.model.findOneAndUpdate({_id: req.params.id}, req.body, (err, obj) => {
            if (err) {
                res.status(400).json(err);
            }
            res.status(200).json(obj);
        });
    };

    // Delete by id
    fnDelete = (req, res) => {
        this.model.findOneAndRemove({_id: req.params.id}, (err) => {
            if (err) {
                res.status(400).json(err);
            }
            res.sendStatus(200);
        });
    };
}

export default TodoDAO;
