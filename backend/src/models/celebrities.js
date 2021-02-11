const {DataTypes}= require('sequelize'); 
const sequelize = require('../store/database');
const {category} = require('./categories');
const {celebrityCategories} = require('./celebrityCategories');
let celebrity = sequelize.define('celebrities', { 
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    name:{
        type:DataTypes.CHAR, allowNull:false
    }
},  {
        freezeTableName: true,timestamps:false
});
let celebrityCategoriesAssociation = function (){
    celebrity.belongsToMany(category,{
        foreignKey:"celebrity_id",
        through:{
            model:celebrityCategories
        },
        timestamps:false,
        uniqueKey:false
    });
    category.belongsToMany(celebrity,{
        foreignKey:'category_id',
        through:{
            model:celebrityCategories
        },
        timestamps:false,
        uniqueKey:false
    });
};
celebrityCategoriesAssociation();
module.exports={
    celebrity
};