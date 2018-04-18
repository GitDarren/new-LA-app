"use strict";
module.exports = (sequelize, DataTypes) => {
  var tagId = sequelize.define("tagId", {
    title: DataTypes.STRING,
    slug: DataTypes.STRING
  });

  tagId.associate = function(models) {
    tagId.belongsToMany(models.posts, {
      through: "posttagsjointable"
    });
  };
  return tagId;
};
