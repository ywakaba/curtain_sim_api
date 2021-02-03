'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class laces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  laces.init({
    code: DataTypes.STRING,
    icon: DataTypes.STRING,
    function: DataTypes.STRING,
    price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    image1_15: DataTypes.STRING,
    image1_20: DataTypes.STRING,
    image2_15: DataTypes.STRING,
    image2_20: DataTypes.STRING,
    image3_15: DataTypes.STRING,
    image3_20: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'laces',
  });
  return laces;
};