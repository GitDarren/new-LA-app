"use strict";
module.exports = (sequelize, DataTypes) => {
  var topics = sequelize.define("topics", {
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
    }
  });

  // topics.associate = function(models) {
  //   // models.topics.belongsTo(models.posts, { foreignKey: "topic_id" });
  // };
  return topics;
};
