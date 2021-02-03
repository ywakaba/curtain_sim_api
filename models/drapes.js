'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class drapes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  drapes.init({
    code: DataTypes.STRING,
    icon: DataTypes.STRING,
    function: DataTypes.STRING,
    price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    taste: DataTypes.STRING,
    image1_15: DataTypes.STRING,
    image1_20: DataTypes.STRING,
    image1_open: DataTypes.STRING,
    image2_15: DataTypes.STRING,
    image2_20: DataTypes.STRING,
    image2_open: DataTypes.STRING,
    image3_15: DataTypes.STRING,
    image3_20: DataTypes.STRING,
    image3_open: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'drapes',
  });
  return drapes;
};