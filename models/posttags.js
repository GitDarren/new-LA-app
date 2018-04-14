"use strict";
module.exports = (sequelize, DataTypes) => {
  var posttags = sequelize.define(
    "posttags",
    {
      title: DataTypes.STRING,
      slug: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return posttags;
};
