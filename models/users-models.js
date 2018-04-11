"use strict";
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      field: "id",
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    phone: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: {
      type: DataTypes.STRING,
      validate: {
        len: [2]
      }
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isINT: true,
        len: [10]
      }
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
  });

  // users.associate = function(models) {
  //   models.users.hasMany(models.posts, { foreignKey: "users_id" });
  //   models.users.hasMany(models.comments, { foreignKey: "users_id" });
  // };
  return users;
};
