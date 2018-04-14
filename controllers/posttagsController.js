const db = require("../models");

// Defining methods for posttagsController
module.exports = {
  findAll: function(req, res) {
    db.posttags.findAll().then(result => {
      console.log("We got this shit - posttags");
      console.log(result);
      res.send(result);
    });
  },
  findById: function(req, res) {
    db.posttags.findById(req.query.id).then(result => {
      res.send(result);
    });
  },
  create: function(req, res) {
    console.log(req.body);
    db.posttags
      .create({ title: req.body.title, slug: req.body.slug })
      .then(() => res.send("success"))
      .catch(err => {
        console.log(err);
        res.status(422).send("fail");
      });
  },
  update: function(req, res) {
    db.posttags
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
    db.posttags
      .destroy({ where: { id: req.params.id } })
      .then(() => res.send("success"))
      .catch(err => {
        console.log(err);
        res.status(422).send("fail");
        res.send(result);
      });
  }
};
