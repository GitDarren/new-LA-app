'use strict';
module.exports = (sequelize, DataTypes) => {
  var tags = sequelize.define('tags', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tags;
};