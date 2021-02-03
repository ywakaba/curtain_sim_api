'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('role_screens', {
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
      image1_role: {
        type: Sequelize.STRING
      },
      image2_role: {
        type: Sequelize.STRING
      },
      image3_role: {
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
    await queryInterface.dropTable('role_screens');
  }
};