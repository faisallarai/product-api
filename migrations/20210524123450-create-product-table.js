/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', { 
      id: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4,
          unique: true,
          allowNull: false,
          primaryKey: true,
          autoIncrement: false
      },
      img: {
          type: Sequelize.BLOB('long'),
          allowNull: true
      },
      name: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
      },
      sku: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: true
      },
      unit: {
          type: Sequelize.STRING,
          allowNull: false
      },
      returnable: {
          type: Sequelize.BOOLEAN,
          defaultValue: true
      },
      productType: {
          type: Sequelize.STRING,
          defaultValue: 'Goods',
          allowNull: false
      },
      sellingPrice: {
          type: Sequelize.DECIMAL,
          allowNull: false
      },
      sellingAccount: {
          type: Sequelize.STRING,
          allowNull: false
      },
      sellingDescription: {
          type: Sequelize.STRING,
          allowNull: true
      },
      sellingTax: {
          type: Sequelize.STRING,
          allowNull: true
      },
      costPrice: {
          type: Sequelize.DECIMAL,
          allowNull: false
      },
      costAccount: {
          type: Sequelize.STRING,
          allowNull: false
      },
      costDescription: {
          type: Sequelize.STRING,
          allowNull: true
      },
      costTax: {
          type: Sequelize.STRING,
          allowNull: true
      },
      trackable: {
          type: Sequelize.BOOLEAN,
          defaultValue: true
      },
      inventoryAccount: {
          type: Sequelize.STRING,
          allowNull: true
      },
      openingStock: {
          type: Sequelize.DECIMAL,
          defaultValue: 0
      },
      reorderPoint: {
          type: Sequelize.DECIMAL,
          defaultValue: 0
      },
      preferredVendor: {
          type: Sequelize.STRING,
          allowNull: true
      },
      weight: {
          type: Sequelize.DECIMAL,
          allowNull: true
      },
      quantity: {
          type: Sequelize.DECIMAL,
          allowNull: true
      },
      manufacturer: {
          type: Sequelize.STRING,
          allowNull: true
      },
      brandId: {
          type: Sequelize.DataTypes.UUID,
          allowNull: true
      },
      code: {
          type: Sequelize.STRING,
          allowNull: true
      },
      stock: {
          type: Sequelize.DECIMAL,
          defaultValue: 0
      },
      commitedStock: {
          type: Sequelize.DECIMAL,
          defaultValue: 0
      },
      availableSale: {
          type: Sequelize.DECIMAL,
          defaultValue: 0
      },
      productDate: {
          type: Sequelize.DATE,
          allowNull: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('products');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
