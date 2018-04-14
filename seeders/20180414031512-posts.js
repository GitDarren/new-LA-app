"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("posts", [
      {
        id: 1,
        title: "Post1",
        slug: "post-1",
        content: "Text here 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: "Post2",
        slug: "post-2",
        content: "Text here 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: "Post3",
        slug: "post-3",
        content: "Text here 3",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts", null, {});
  }
};
