const db = require("../models");

// Defining methods for postsController
module.exports = {
  findAll: function(req, res) {
    db.posts.findAll().then(result => {
      console.log("We got all the posts!!!!!");
      console.log(result);
      res.send(result);
    });
  },
  findById: function(req, res) {
    db.posts.findById(req.query.id).then(result => {
      res.send(result);
    });
  },
  create: function(req, res) {
    console.log(req.body);
    db.posts
      .create({
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content
      })
      .then(() => res.send("success"))
      .catch(err => {
        console.log(err);
        res.status(422).send("fail");
      });
  },
  update: function(req, res) {
    db.posts
      .update(
        {
          title: req.body.title,
          slug: req.body.slug,
          content: req.body.content
        },
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
    db.posts
      .destroy({ where: { id: req.params.id } })
      .then(() => res.send("success"))
      .catch(err => {
        console.log(err);
        res.status(422).send("fail");
        res.send(result);
      });
  }
};
