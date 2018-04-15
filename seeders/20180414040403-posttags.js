"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("posttags", [
      {
        id: 1,
        title: "First Tag",
        slug: "first-tag",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // {
      //   id: 2,
      //   title: "Second Tag",
      //   slug: "second-tag"
      //   // createdAt: new Date(),
      //   // updatedAt: new Date()
      // },
      // {
      //   id: 3,
      //   title: "Third Tag",
      //   slug: "third-tag"
      //   // createdAt: new Date(),
      //   // updatedAt: new Date()
      // }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posttags", null, {});
  }
};
