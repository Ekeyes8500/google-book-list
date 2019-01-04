const db = require("../models");

//methods for querying database
module.exports = {
    findAll: function(req, res) {
        db.Book
        .find(req.query)
        .sort({dateAdded:-1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    delete: function(req, res) {
        db.Book
        .findById({ _id:req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}