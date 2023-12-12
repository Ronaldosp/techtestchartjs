'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique:{
        msg: "Email must be unique",
        args: true
      },
      validate:{
        notNull:{
          msg: "Email cannot be null"
        },
        notEmpty:{
          msg: "Email cannot be null"
        },
        isEmail:{
          msg: "Must be in Email Format",
          args: true
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: "Password cannot be Null"
        },
        notEmpty:{
          msg: "Password cannot be Empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance)=>{
    instance.password = hashPassword(instance.password)
  })
  return User;
};