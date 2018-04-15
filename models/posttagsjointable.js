"use strict";
module.exports = (sequelize, DataTypes) => {
  var posttagsjointable = sequelize.define("posttagsjointable", {
    postId: DataTypes.STRING,
    posttagsId: DataTypes.STRING
  });

  return posttagsjointable;
};
