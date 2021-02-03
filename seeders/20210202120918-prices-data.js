'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const now = new Date();
    return queryInterface.bulkInsert('prices', [
      { section: 0, disp_value: '全ての価格',  createdAt: now, updatedAt: now},
      { section: 1, disp_value: '~¥10,000',  createdAt: now, updatedAt: now},
      { section: 2, disp_value: '~¥20,000',  createdAt: now, updatedAt: now},
      { section: 3, disp_value: '~¥40,000',  createdAt: now, updatedAt: now},
      { section: 4, disp_value: '~¥59,999',  createdAt: now, updatedAt: now},
      { section: 5, disp_value: '¥60,000~',  createdAt: now, updatedAt: now}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('prices', null, {});
  }
};
