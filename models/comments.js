'use strict';
module.exports = (sequelize, DataTypes) => {
  var comments = sequelize.define('comments', {
    slug: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return comments;
};