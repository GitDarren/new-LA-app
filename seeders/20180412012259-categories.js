"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("categories", [
      {
        id: 1,
        title: "Football",
        slug: "football",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: "Baseball",
        slug: "baseball",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: "Basketball",
        slug: "baseball",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  }
};
