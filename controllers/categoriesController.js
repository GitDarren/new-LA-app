const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
      db.categories.findAll().then(result => {
        res.send(result);
      })
  },
  findById: function(req, res) {
  },
  create: function(req, res) {
  },
  update: function(req, res) {
  },
  remove: function(req, res) {
  }
};
