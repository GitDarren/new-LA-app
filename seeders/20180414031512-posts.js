"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("posts", [
      {
        id: 1,
        title: "Post1",
        slug: "post-1",
        content: "Text here 1",
        vote: 1,
        userId: 1,
        tagId: 1,
        categoryId: 1,
        commentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: "Post2",
        slug: "post-2",
        vote: 2,
        userId: 2,
        tagId: 2,
        categoryId: 2,
        commentId: 2,
        content: "Text here 2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: "Post3",
        slug: "post-3",
        vote: 3,
        userId: 3,
        tagId: 3,
        categoryId: 3,
        commentId: 3,
        content: "Text here 3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: "Post4",
        slug: "post-4",
        vote: 4,
        userId: 4,
        tagId: 4,
        categoryId: 4,
        commentId: 4,
        content: "Text here 4",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts", null, {});
  }
};
