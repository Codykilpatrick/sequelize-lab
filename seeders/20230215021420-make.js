'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const date = new Date()

    await queryInterface.bulkInsert('Makes', [{
      name: 'Ford',
      startyear: 1901,
      createdAt: date,
      updatedAt: date,
    }])

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Makes', null, {})

  }
};
