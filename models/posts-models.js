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
      type: DataTypes.STRING(500) //Do I want to specify how long the description is?? //
    },
    content: {
      type: DataTypes.STRING(500) //Is is the correct format for a long form text field?? //
    }
    // topics_id: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: "topics",
    //     key: "id"
    //   }
    // },
    // categories_id: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: "categories",
    //     key: "id"
    //   }
    // },
    // users_id: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: "users",
    //     key: "id"
    //   }
    // }
  });
  // posts.associate = function(models) {
  //   // models.posts.hasMany(models.topics, { foreignKey: "topics_id" });
  //   // models.posts.hasMany(models.categories, { foreignKey: "categories_id" });
  //   // models.posts.belongsTo(models.users, { foreignKey: "users_id" });
  //   // models.posts.hasMany(models.comments, { foreignKey: "posts_id" });
  // };
  return posts;
};
