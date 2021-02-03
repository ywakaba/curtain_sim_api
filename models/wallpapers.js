'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wallpapers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  wallpapers.init({
    code: DataTypes.STRING,
    icon: DataTypes.STRING,
    image_wall: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wallpapers',
  });
  return wallpapers;
};