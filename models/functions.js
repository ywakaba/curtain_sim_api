'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class functions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  functions.init({
    name: DataTypes.STRING,
    disp_name: DataTypes.STRING,
    selectables: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'functions',
  });
  return functions;
};