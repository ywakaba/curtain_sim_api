'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('roman_shades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      function: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER,
        // onDelete: 'CASCADE',
        // references: {
        //   model: 'prices',
        //   key: 'section',
        // }
      },
      brand: {
        type: Sequelize.STRING
      },
      taste: {
        type: Sequelize.STRING
      },
      image1_shade: {
        type: Sequelize.STRING
      },
      image2_shade: {
        type: Sequelize.STRING
      },
      image3_shade: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('roman_shades');
  }
};