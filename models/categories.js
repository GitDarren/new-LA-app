"use strict";
module.exports = (sequelize, DataTypes) => {
  var categories = sequelize.define("categories", {
    title: {
      type: DataTypes.STRING(255)
    },
    slug: {
      type: DataTypes.STRING(255)
    }
  });

  // categories.associate = function(models) {
  //   // models.categories.belongsTo(models.posts, { foreignKey: "categories_id" });
  // };
  return categories;
};
