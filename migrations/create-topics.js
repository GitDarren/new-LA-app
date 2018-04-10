'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('topics', {
      topics_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      post_categoryID: { 
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      post_id: { 
        type: DataTypes.INTEGER,
        references: {
          model: 'posts',
          key: 'id'
        }
      },
      classMethods: {
          associate: function(models)   {
              //associations defined here
              models.posts.hasMany(models.categories);
              models.categories.belongsTo(models.posts);
              models.topics.belongsTo(models.posts);
          }
      } 
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};
