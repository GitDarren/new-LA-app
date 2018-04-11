"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("topics", {
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
          model: "categories",
          key: "id"
        }
      },
      posts_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "posts",
          key: "id"
        }
      },
      users_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("topics");
  }
};
