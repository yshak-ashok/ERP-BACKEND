const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the User model
const User = sequelize.define(
  'User',
  {
      firstName: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      lastName: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      role: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
      },
      mobile: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
      },
  },
  {
      timestamps: false,
      tableName: 'users',
  },
);

// Automatically sync
User.sync()
    .then(() => {
        console.log('Users table created');
    })
    .catch((err) => {
        console.error('Error creating table:', err);
    });

module.exports = User;
