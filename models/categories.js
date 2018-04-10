'use strict';
module.exports = (sequelize, DataTypes) => {
  var categories = sequelize.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        field: 'title'
    },
    slug:
      {
          type: DataTypes.STRING,
          field: 'slug'
      }
  });
  return categories;
};
