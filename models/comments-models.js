"use strict";
module.exports = (sequelize, DataTypes) => {
  var comments = sequelize.define("comments", {
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
    content: {
      type: DataTypes.TEXT() //Is is the correct format for a long form text field?? //
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
    // posts_id: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: "posts",
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

  // comments.associate = function(models) {
  //   // models.comments.belongsTo(models.posts, { foreignKey: "posts_id" });
  //   // models.comments.belongsTo(models.users, { foreignKey: "users_id" });
  // };

  return comments;
};
