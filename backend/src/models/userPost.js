const {DataTypes}= require('sequelize'); 
const sequelize = require('../store/database');
let userPost = sequelize.define('user_posts', { 
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER, allowNull:false, unique:false
    },
    post_id:{
        type:DataTypes.INTEGER, allowNull:false, unique:false
    }
},  {
        freezeTableName: true, timestamps:false
});
module.exports={
    userPost
}