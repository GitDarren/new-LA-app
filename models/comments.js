"use strict";
module.exports = (sequelize, DataTypes) => {
  var comments = sequelize.define(
    "comments",
    {
      slug: DataTypes.STRING,
      content: DataTypes.STRING,
      vote: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  comments.associate = function(models) {
    comments.belongsTo(models.posts);
    comments.belongsTo(models.users);
  };
  return comments;
};
