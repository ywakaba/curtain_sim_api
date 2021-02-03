'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  roman.init({
    code: DataTypes.STRING,
    icon: DataTypes.STRING,
    function: DataTypes.STRING,
    price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    taste: DataTypes.STRING,
    image1_shade: DataTypes.STRING,
    image2_shade: DataTypes.STRING,
    image3_shade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'roman',
  });
  return roman;
};