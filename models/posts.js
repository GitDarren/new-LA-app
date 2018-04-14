"use strict";
module.exports = (sequelize, DataTypes) => {
  var posts = sequelize.define("posts", {
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    content: DataTypes.STRING,
    vote: DataTypes.STRING,
    userId: DataTypes.STRING,
    categoryId: DataTypes.STRING,
    tagId: DataTypes.STRING,
    commentId: DataTypes.STRING
  });

  posts.associate = function(models) {
    posts.belongsTo(models.userId);
    posts.belongsTo(models.categories);
    // posts.hasMany(models.tagId);
    // posts.hasMany(models.commentId);
  };
  return posts;
};
