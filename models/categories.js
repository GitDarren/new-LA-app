"use strict";
module.exports = (sequelize, DataTypes) => {
  var categories = sequelize.define("categories", {
    title: DataTypes.STRING,
    slug: DataTypes.STRING
  });
  categories.associate = function(models) {
    categories.hasMany(models.posts);
  };
  return categories;
};
