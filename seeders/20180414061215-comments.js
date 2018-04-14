"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("comments", [
      {
        id: 1,
        slug: "football",
        content: "comment 1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        slug: "baseball",
        content: "comment 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        slug: "baseball",
        content: "comment 3",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("comments", null, {});
  }
};
