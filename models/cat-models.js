"use strict";
module.exports = (sequelize, DataTypes) => {
  var categories = sequelize.define("categories", {
    id: {
      type: DataTypes.INTEGER, //Do I need ID's since sequelize creates ids automatically??//
      field: "id",
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255)
    },
    slug: {
      type: DataTypes.STRING(255)
    },
    users_id: {
      type: DataTypes.STRING,
      references: {
        model: "users",
        key: "id"
      }
    }
  });

  categories.associate = function(models) {
    models.categories.hasMany(models.posts, { foreignKey: "posts_id" });
    models.categories.belongsTo(models.users, { foreignKey: "users_id" });
  };
  return categories;
};
