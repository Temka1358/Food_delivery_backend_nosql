
const Category = require('../models/Category')
const { Sequelize, DataTypes } = require('@sequelize/core')
const sequelize = require('../database')

const Food =  sequelize.define('food', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    portion : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    foodCategoryId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
},
{
    timestamps: false
});


Category.hasMany(Food);
Food.belongsTo(Category);

async () => {
    await Food.sync({alter: true});
}


module.exports = Food;