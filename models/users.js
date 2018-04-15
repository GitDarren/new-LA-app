"use strict";
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define(
    "users",
    {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      username: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      firstName: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING
      },
      street: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      state: {
        type: DataTypes.STRING
      },
      zip: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          isInt: true
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
      // topics_id: {
      //   type: DataTypes.STRING,
      //   references: {
      //     model: "topics",
      //     key: "id"
      //   }
      // },
      // categories_id: {
      //   type: DataTypes.STRING,
      //   references: {
      //     model: "categories",
      //     key: "id"
      //   }
      // }
    },
    {
      classMethods: {
        associate: function(models) {
          //   models.users.hasMany(models.posts, { foreignKey: "users_id" });
          //   models.users.hasMany(models.comments, { foreignKey: "users_id" });
        }
      }
    }
  );
  users.associate = function(models) {
    users.hasMany(models.posts);
    users.hasMany(models.comments);
  };
  return users;
};
