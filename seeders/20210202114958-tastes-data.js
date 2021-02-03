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
    return queryInterface.bulkInsert('tastes', [
      { name: 'taste_N', disp_name: 'ナチュラル',  createdAt: now, updatedAt: now},
      { name: 'taste_G', disp_name: 'with グリーン',  createdAt: now, updatedAt: now},
      { name: 'taste_S', disp_name: 'シンプル',  createdAt: now, updatedAt: now},
      { name: 'taste_W_S', disp_name: 'ウォーターサイド',  createdAt: now, updatedAt: now},
      { name: 'taste_Sc', disp_name: '北欧',  createdAt: now, updatedAt: now},
      { name: 'taste_V', disp_name: 'ヴィンテージ',  createdAt: now, updatedAt: now},
      { name: 'taste_C', disp_name: 'クラシック',  createdAt: now, updatedAt: now},
      { name: 'taste_E_C', disp_name: 'エレガントクラシック',  createdAt: now, updatedAt: now},
      { name: 'taste_M', disp_name: 'モダン',  createdAt: now, updatedAt: now},
      { name: 'taste_S_M', disp_name: 'シンプルモダン',  createdAt: now, updatedAt: now},
      { name: 'taste_Mj', disp_name: '無地',  createdAt: now, updatedAt: now},
      { name: 'taste_Wa', disp_name: '和柄',  createdAt: now, updatedAt: now}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('tastea', null, {});
  }
};
