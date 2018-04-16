"use strict";
module.exports = (sequelize, DataTypes) => {
  var posts = sequelize.define("posts", {
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    content: DataTypes.STRING,
    vote: DataTypes.STRING,
    userId: DataTypes.STRING,
    categoryId: DataTypes.STRING,
    tagId: DataTypes.STRING
    // FOREIGNKEY (categories);
  });

  posts.associate = function(models) {
    models.posts.belongsTo(models.users);
    models.posts.belongsTo(models.categories);
    models.posts.hasMany(models.comments);
    models.posts.hasMany(models.posttags);

    // models.posts.belongsTo(models.posttags);

    // posts.hasMany(models.tagId);
    // posts.hasMany(models.commentId);
  };
  return posts;
};
