

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
    categoryId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
},
{
    timestamps: false
});


async () => {
    await Food.sync({alter: true});
}


module.exports = Food;