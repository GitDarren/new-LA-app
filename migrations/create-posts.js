'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      post_id: {
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
      post_content: {
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
      post_topicsID: { 
        type: DataTypes.INTEGER,
        references: {
          model: 'topics',
          key: 'id'
        }
      },
      parent_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },

    
    posts.associate = function(models) {
          
        //associations defined here
        models.posts.hasMany(models.categories, {foreignKey: 'post_id'});
        models.categories.belongsTo(models.posts);
        models.topics.belongsTo(models.posts);
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};
