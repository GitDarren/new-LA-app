const db = require("../models");

// Defining methods for usersController
module.exports = {
  findAll: function(req, res) {
    db.users.findAll().then(result => {
      console.log("We got this shit - users");
      console.log(result);
      res.send(result);
    });
  },
  findById: function(req, res) {
    db.users.findById(req.query.id).then(result => {
      res.send(result);
    });
  },
  create: function(req, res) {
    console.log(req.body);
    db.users
      .create({
        username: req.body.username,
        password: req.body.password,
        emai: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        street: req.body.phone,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
      })
      .then(() => res.send("success"))
      .catch(err => {
        console.log(err);
        res.status(422).send("fail");
      });
  },
  update: function(req, res) {
    db.users
      .update(
        {
          username: req.body.username,
          password: req.body.password,
          emai: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phone: req.body.phone,
          street: req.body.phone,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip
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
    db.users
      .destroy({ where: { id: req.params.id } })
      .then(() => res.send("success"))
      .catch(err => {
        console.log(err);
        res.status(422).send("fail");
        res.send(result);
      });
  }
};
