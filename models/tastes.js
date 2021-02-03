'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tastes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tastes.init({
    name: DataTypes.STRING,
    disp_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tastes',
  });
  return tastes;
};