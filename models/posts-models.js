"use strict";
module.exports = (sequelize, DataTypes) => {
  var posts = sequelize.define("posts", {
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
    description: {
      type: DataTypes.TEXT(500) //Do I want to specify how long the description is?? //
    },
    content: {
      type: DataTypes.TEXT() //Do I want to specify how long the description is?? //
    },
    topics_id: {
      type: DataTypes.STRING,
      references: {
        model: "topics",
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
  return posts;
};
