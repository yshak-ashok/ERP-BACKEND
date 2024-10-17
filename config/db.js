const { Sequelize } = require('sequelize');

// Initialize Sequelize with database credentials
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false
});

// Authenticate and connect to the database
sequelize.authenticate()
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
