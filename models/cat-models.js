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
    }
  });

  // categories.associate = function(models) {
  //   // models.categories.belongsTo(models.posts, { foreignKey: "categories_id" });
  // };
  return categories;
};
