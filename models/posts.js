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
    URL: DataTypes.STRING
    // FOREIGNKEY (categories);
  });

  posts.associate = function(models) {
    posts.belongsTo(models.users);
    posts.belongsTo(models.categories);
    posts.hasMany(models.comments);
    posts.hasMany(models.tagId);

    // models.posts.belongsTo(models.posttags);

    // posts.hasMany(models.tagId);
    // posts.hasMany(models.commentId);
  };
  return posts;
};
