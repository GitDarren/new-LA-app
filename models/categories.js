'use strict';
module.exports = (sequelize, DataTypes) => {
  var categories = sequelize.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(255),
    },
    slug:
      {
          type: DataTypes.STRING(255),
      }
  });
  return categories;
};
