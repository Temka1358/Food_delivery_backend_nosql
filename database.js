const { Sequelize } = require('sequelize');
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const sequelize = new Sequelize('food_delivery', username, password, {
 host: 'localhost',
 dialect: 'mysql',
 logging: true
});
sequelize.authenticate()
 .then(() => {
   console.log('Connection has been established successfully.');
     })
 .catch(err => {
   console.error('Unable to connect to the database:', err);
 });
module.exports = sequelize;