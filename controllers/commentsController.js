const db = require("../models");

// Defining methods for commentsController
module.exports = {
  findAll: function(req, res) {
    db.comments.findAll().then(result => {
      console.log("We got this shit - comments");
      console.log(result);
      res.send(result);
    });
  },
  findById: function(req, res) {
    db.comments.findById(req.query.id).then(result => {
      res.send(result);
    });
  },
  create: function(req, res) {
    console.log(req.body);
    db.comments
      .create({ slug: req.body.slug, content: req.body.content })
      .then(() => res.send("success"))
      .catch(err => {
        console.log(err);
        res.status(422).send("fail");
      });
  },
  update: function(req, res) {
    db.comments
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
    db.comments
      .destroy({ where: { id: req.params.id } })
      .then(() => res.send("success"))
      .catch(err => {
        console.log(err);
        res.status(422).send("fail");
        res.send(result);
      });
  }
};
