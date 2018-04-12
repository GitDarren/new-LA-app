const db = require("../models");

// Defining methods for categoriesController
module.exports = {
  findAll: function(req, res) {
    db.categories.findAll().then(result => {
      console.log("We got this shit - categories");
      console.log(result);
      res.send(result);
    });
  },
  findById: function(req, res) {
    db.categories.findById(req.query.id).then(result => {
      res.send(result);
    });
  },
  create: function(req, res) {
    db.categories
      .create({ title: req.body.title, slug: req.body.slug })
      .then(() => response.send("success"))
      .catch(() => {
        response.status(422).send(fail);
        res.send(result);
      });
  },
  update: function(req, res) {
    db.categories
      .update({ title: req.body.title, slug: req.body.slug })
      .then(() => response.send("success"))
      .catch(() => {
        response.status(422).send(fail);
        res.send(result);
      });
  },
  remove: function(req, res) {
    db.categories.destroy().then(result => {
      res.send(result);
    });
  }
};
