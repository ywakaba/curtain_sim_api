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
    return queryInterface.bulkInsert('functions', [
      { name: 'fire', disp_name: '防炎',  selectables: 'lace,drape_shade,role', createdAt: now, updatedAt: now},
      { name: 'japan', disp_name: '国産',  selectables: 'lace,drape_shade', createdAt: now, updatedAt: now},
      { name: 'europe', disp_name: '欧州',  selectables: 'lace,drape_shade', createdAt: now, updatedAt: now},
      { name: 'recycle', disp_name: 'リサイクル制度',  selectables: 'lace,drape_shade,role', createdAt: now, updatedAt: now},
      { name: 'set', disp_name: '形状加工',  selectables: 'lace,drape_shade', createdAt: now, updatedAt: now},
      { name: 'washable', disp_name: 'ウォッシャブル',  selectables: 'lace,drape_shade,role', createdAt: now, updatedAt: now},
      { name: 'seamless', disp_name: 'つなぎ目無し',  selectables: 'lace', createdAt: now, updatedAt: now},
      { name: 'secret', disp_name: '部屋が見えにくい',  selectables: 'lace,role', createdAt: now, updatedAt: now},
      { name: 'natural', disp_name: '天然素材含む',  selectables: 'lace,drape_shade', createdAt: now, updatedAt: now},
      { name: 'virus', disp_name: '抗菌',  selectables: 'lace,drape_shade,role', createdAt: now, updatedAt: now},
      { name: 'heat', disp_name: '遮熱',  selectables: 'lace,role', createdAt: now, updatedAt: now},
      { name: 'uvcat', disp_name: 'UVカット',  selectables: 'lace,role', createdAt: now, updatedAt: now},
      { name: 'pollen', disp_name: '花粉キャッチ',  selectables: 'lace', createdAt: now, updatedAt: now},
      { name: 'srsg', disp_name: '防汚',  selectables: 'lace,role', createdAt: now, updatedAt: now},
      { name: 'embro', disp_name: '裾柄レース',  selectables: 'lace', createdAt: now, updatedAt: now},
      { name: 'color', disp_name: 'カラーレース',  selectables: 'lace', createdAt: now, updatedAt: now},
      { name: 'print', disp_name: 'プリントレース',  selectables: 'lace', createdAt: now, updatedAt: now},
      { name: 'bo1', disp_name: '遮光1級',  selectables: 'drape_shade,role', createdAt: now, updatedAt: now},
      { name: 'bo2', disp_name: '遮光2級',  selectables: 'drape_shade,role', createdAt: now, updatedAt: now}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('functions', null, {});
  }
};
