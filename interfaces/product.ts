import { Optional, Model } from 'sequelize';

export interface ProductAttributes {
    id?: string;
    img?: string | ArrayBuffer | null;
    sku?: string | null;
    name: string;
    unit: string;
    returnable: boolean;
    productType: ProductType;
    sellingPrice: number;
    sellingAccount: string;
    sellingDescription?: string | null;
    sellingTax?: Tax | null;
    costPrice: number;
    costAccount: string;
    costDescription?: string | null;
    costTax?: Tax | null;
    trackable: boolean;
    inventoryAccount: string | null;
    openingStock?: number | null;
    reorderPoint?: number | null;
    preferredVendor?: string | null;
    weight?: number | null;
    quantity?: number | null;
    manufacturer?: string | null;
    brandId?: string | null;
    code?: string | null;
    stock?: number;
    commitedStock?: number;
    availableSale?: number;
    productDate?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}

export enum ProductType {
    Goods = "Goods",
    Service = "Service"
}

export enum Tax {
    VAT = "VAT",
    NHIL = "NHIL",
    Income = "Income"
}

export interface ProductCreationAttributes extends Optional<ProductAttributes, 
'id' | 'img' | 'sku' | 'sellingTax' | 'sellingDescription' | 'costTax' | 'costDescription' | 
'openingStock' | 'stock' | 'commitedStock' | 'availableSale'> {}
  
export interface ProductInstance extends Model<ProductAttributes, ProductCreationAttributes>, ProductAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}