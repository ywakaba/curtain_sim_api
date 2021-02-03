'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role_screens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  role_screens.init({
    code: DataTypes.STRING,
    icon: DataTypes.STRING,
    function: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image1_role: DataTypes.STRING,
    image2_role: DataTypes.STRING,
    image3_role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'role_screens',
  });
  return role_screens;
};