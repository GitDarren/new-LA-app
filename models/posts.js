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
    // FOREIGNKEY (categories);
  });

  posts.associate = function(models) {
    // models.posts.belongsTo(models.userId);
    models.posts.belongsTo(models.categories);
    // posts.hasMany(models.tagId);
    // posts.hasMany(models.commentId);
  };
  return posts;
};
