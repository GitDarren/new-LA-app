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
    console.log(req.body);
    db.categories
      .create({ title: req.body.title, slug: req.body.slug })
      .then(() => res.send("success"))
      .catch(err => {
        console.log(err);
        res.status(422).send("fail");
      });
  },
  update: function(req, res) {
    db.categories
      .update(
        { title: req.body.title, slug: req.body.slug },
        { where: { id: req.params.id } }
      )
      .then(() => res.send("success"))
      .catch(err => {
        console.log(err);
        res.status(422).send("fail");
        res.send(result);
      });
  },
  remove: function(req, res) {
    db.categories
      .destroy({ where: { id: req.params.id } })
      .then(() => res.send("success"))
      .catch(err => {
        console.log(err);
        res.status(422).send("fail");
        res.send(result);
      });
  }
};
