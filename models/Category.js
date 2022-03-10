



const { Sequelize, DataTypes } = require('@sequelize/core')
const sequelize = require('../database')

const Category =  sequelize.define('food_category', {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type:
    {
        type: DataTypes.STRING,
        allowNull: true
    },
    color : {
        type: DataTypes.STRING,
        allowNull: true
    }
},
{
    timestamps: false,
    freezeTableName: true
},
);


async () => {
    await Category.sync({alter: true});
}

module.exports = Category;