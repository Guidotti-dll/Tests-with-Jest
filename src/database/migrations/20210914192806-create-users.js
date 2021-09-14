'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.crateTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      email: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
      },
      password_hash: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};