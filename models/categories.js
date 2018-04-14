'use strict';
module.exports = (sequelize, DataTypes) => {
  var categories = sequelize.define('categories', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return categories;
};