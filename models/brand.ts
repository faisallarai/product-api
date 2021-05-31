import sequelize from '.';
import Sequelize from 'sequelize';
import { BrandInstance } from '../interfaces/brand';
import Product from './product';

const Brand = sequelize.define<BrandInstance>('Brand', {
    id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

Brand.hasMany(Product, {
    sourceKey: 'id',
    foreignKey: 'brandId',
    as: 'products'
});

Product.belongsTo(Brand, {
    foreignKey: 'brandId',
    as: 'brand'
});

export default Brand;