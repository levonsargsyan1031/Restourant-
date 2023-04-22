const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  database: 'foodoclockmenu',
  username: 'root',
  password: '1234',
});

const MenuItem = sequelize.define('MenuItem', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },     
  composition: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  category:{
    type: DataTypes.STRING,
  },
  image_url:{
    type: DataTypes.STRING,
  },
});





await MenuItem.sync();