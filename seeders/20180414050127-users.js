"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        id: 1,
        username: "user1",
        password: "password1",
        email: "email@example.com",
        firstName: "first",
        lastName: "last",
        phone: "555-555-5555",
        street: "123 Main St.",
        city: "Anytown",
        state: "TX",
        zip: "55555",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        username: "user2",
        password: "password1",
        email: "email1@example.com",
        firstName: "first",
        lastName: "last",
        phone: "555-555-5555",
        street: "123 Main St.",
        city: "Anytown",
        state: "TX",
        zip: "55555",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        username: "user3",
        password: "password1",
        email: "email2@example.com",
        firstName: "first",
        lastName: "last",
        phone: "555-555-5555",
        street: "123 Main St.",
        city: "Anytown",
        state: "TX",
        zip: "55555",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
