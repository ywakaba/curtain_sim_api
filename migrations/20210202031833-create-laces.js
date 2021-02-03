'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('laces', {
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
        type: Sequelize.INTEGER
        // type: Sequelize.INTEGER,
        // onDelete: 'CASCADE',
        // references: {
        //   model: 'prices',
        //   key: 'section',
        // }
      },
      brand: {
        type: Sequelize.STRING
      },
      image1_15: {
        type: Sequelize.STRING
      },
      image1_20: {
        type: Sequelize.STRING
      },
      image2_15: {
        type: Sequelize.STRING
      },
      image2_20: {
        type: Sequelize.STRING
      },
      image3_15: {
        type: Sequelize.STRING
      },
      image3_20: {
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
    await queryInterface.dropTable('laces');
  }
};