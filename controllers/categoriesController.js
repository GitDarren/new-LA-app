const db = require("../models");

// Defining methods for categoriesController
module.exports = {
  findAll: function(req, res) {
    db.categories
      .findAll({
        include: [db.posts]
      })
      .then(result => {
        res.send(result);
      })
      .catch(err => res.send(err));
  },
  findById: function(req, res) {
    db.categories.findById(req.query.id).then(result => {
      res.send(result);
    });
  },
  create: function(req, res) {
    console.log(req.body);
    db.categories
      .create({ slug: req.body.slug, content: req.body.content })
      .then(() => res.send("success"))
      .catch(err => {
        console.log(err);
        res.status(422).send("fail");
      });
  },
  update: function(req, res) {
    db.categories
      .update(
        { slug: req.body.slug, content: req.body.content },
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
