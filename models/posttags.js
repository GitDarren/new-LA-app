"use strict";
module.exports = (sequelize, DataTypes) => {
  var posttags = sequelize.define("posttags", {
    title: DataTypes.STRING,
    slug: DataTypes.STRING
  });

  posttags.associate = function(models) {
    posttags.belongsToMany(models.posts, {
      through: "posttagsjointable"
    });
  };
  return posttags;
};
