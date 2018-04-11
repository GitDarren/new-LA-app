"use strict";
module.exports = (sequelize, DataTypes) => {
  var posts = sequelize.define("topics", {
    id: {
      type: DataTypes.INTEGER,
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
    },
    categories_id: {
      type: DataTypes.STRING,
      references: {
        model: "categories",
        key: "id"
      }
    }
  });

  topics.associate = function(models) {
    models.topics.belongsTo(models.posts, { foreignKey: "posts_id" });
    models.topics.hasMany(models.categories, { foreignKey: "categories_id" });
    models.topics.belongsTo(models.users, { foreignKey: "users_id" });
  };
  return topics;
};
