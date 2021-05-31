/* eslint-disable @typescript-eslint/no-explicit-any */

import { ProductCreationAttributes, ProductType, Tax } from '../interfaces/product';

type Fields = {
    name: unknown, 
    sku: unknown, 
    img: unknown,
    unit: unknown,
    returnable: unknown,
    productType: unknown,
    sellingPrice: unknown,
    sellingAccount: unknown,
    sellingDescription: unknown,
    sellingTax: unknown,
    costPrice: unknown,
    costAccount: unknown,
    costDescription: unknown,
    costTax: unknown,
    trackable: unknown,
    inventoryAccount: unknown,
    openingStock: unknown,
    reorderPoint: unknown,
    preferredVendor: unknown,
    weight: unknown,
    quantity: unknown,
    manufacturer: unknown,
    brandId: unknown,
    code: unknown,
    productDate: unknown,
};

const toNewProductEntry = ({
    name, 
    sku, 
    img,
    unit,
    returnable,
    productType,
    sellingPrice,
    sellingAccount,
    sellingDescription,
    sellingTax,
    costPrice,
    costAccount,
    costDescription,
    costTax,
    trackable,
    inventoryAccount,
    openingStock,
    reorderPoint,
    preferredVendor,
    weight,
    quantity,
    manufacturer,
    brandId,
    code,
    productDate,
}: Fields): ProductCreationAttributes => {
    const newProductEntry = {
        name: parseName(name),
        img: parseImg(img),
        sku: parseSku(sku), 
        unit: parseUnit(unit),
        returnable: parseReturnable(returnable),
        productType: parseProductType(productType),
        sellingPrice: parseSellingPrice(sellingPrice),
        sellingAccount: parseSellingAccount(sellingAccount),
        sellingDescription: parseSellingDescription(sellingDescription),
        sellingTax: parseSellingTax(sellingTax),
        costPrice: parseCostPrice(costPrice),
        costAccount: parseCostAccount(costAccount),
        costDescription: parseCostDescription(costDescription),
        costTax: parseCostTax(costTax),
        trackable: parseTrackable(trackable),
        inventoryAccount: parseInventoryAccount(inventoryAccount),
        openingStock: parseOpeningStock(openingStock),
        reorderPoint: parseReorderPoint(reorderPoint),
        preferredVendor: parsePreferredVendor(preferredVendor),
        weight: parseWeight(weight),
        quantity: parseQuantity(quantity),
        manufacturer: parseManufacturer(manufacturer),
        brandId: parseBrandId(brandId),
        code: parseCode(code),
        productDate: parseProductDate(productDate),
    };

    return newProductEntry;
};

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isBoolean = (bool: unknown): bool is boolean => {
    return typeof bool === 'boolean' || Boolean(bool) === bool;
};

const isNumber = (num: unknown): num is number => {
    return typeof num === 'number' || num instanceof Number;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const isProductType = (param: any): param is ProductType => {
    return Object.values(ProductType).includes(param);
};

const isTax = (param: any): param is Tax => {
    return Object.values(Tax).includes(param);
};

const parseName = (name: unknown): string => {
    if (!name || !isString(name)) {
        throw new Error('Incorrect or missing name: ' + name);
    }

    return name;
};

const parseSku = (sku: unknown): string | null => {
    if (!isString(sku) && sku !== null) {
        throw new Error('Incorrect or missing sku: ' + sku);
    }

    return sku;
};

const parseImg = (img: unknown): string | null=> {
    if (!isString(img) && img !== null) {
        throw new Error('Incorrect or missing img: ' + img);
    }

    return img;
};

const parseUnit = (unit: unknown): string=> {
    if (!unit || !isString(unit)) {
        throw new Error('Incorrect or missing unit: ' + unit);
    }

    return unit;
};

const parseReturnable = (returnable: unknown): boolean => {
    if (!isBoolean(returnable)) {
        throw new Error('Incorrect or missing returnable: ' + returnable);
    }

    return returnable;
};

const parseProductType = (productType: unknown): ProductType => {
    if (!productType || !isProductType(productType)) {
        throw new Error('Incorrect or missing productType: ' + productType);
    }

    return productType;
};

const parseSellingPrice = (sellingPrice: unknown): number => {
    if (!sellingPrice || !isNumber(sellingPrice)) {
        throw new Error('Incorrect or missing sellingPrice: ' + sellingPrice);
    }

    return sellingPrice;
};

const parseSellingAccount = (sellingAccount: unknown): string => {
    if (!sellingAccount || !isString(sellingAccount)) {
        throw new Error('Incorrect or missing sellingAccount: ' + sellingAccount);
    }

    return sellingAccount;
};

const parseSellingDescription = (sellingDescription: unknown): string | null=> {
    if (!isString(sellingDescription) && sellingDescription !== null) {
        throw new Error('Incorrect or missing sellingDescription: ' + sellingDescription);
    }

    return sellingDescription;
};

const parseSellingTax = (sellingTax: unknown): Tax | null => {
    if (!isTax(sellingTax) && sellingTax !== null) {
        throw new Error('Incorrect or missing sellingTax: ' + sellingTax);
    }

    return sellingTax;
};

const parseCostPrice = (costPrice: unknown): number => {
    if (!costPrice || !isNumber(costPrice)) {
        throw new Error('Incorrect or missing costPrice: ' + costPrice);
    }

    return costPrice;
};

const parseCostAccount = (costAccount: unknown): string => {
    if (!costAccount || !isString(costAccount)) {
        throw new Error('Incorrect or missing costAccount: ' + costAccount);
    }

    return costAccount;
};

const parseCostDescription = (costDescription: unknown): string | null=> {
    if (!isString(costDescription) && costDescription !== null) {
        throw new Error('Incorrect or missing costPrice: ' + costDescription);
    }

    return costDescription;
};

const parseCostTax = (costTax: unknown): Tax | null=> {
    if (!isTax(costTax) && costTax !== null) {
        throw new Error('Incorrect or missing costTax: ' + costTax);
    }

    return costTax;
};

const parseTrackable = (trackable: unknown): boolean => {
    if (!isBoolean(trackable)) {
        throw new Error('Incorrect or missing trackable: ' + trackable);
    }

    return trackable;
};

const parseInventoryAccount = (inventoryAccount: unknown): string | null=> {
    if (!isString(inventoryAccount) && inventoryAccount !== null) {
        throw new Error('Incorrect or missing inventoryAccount: ' + inventoryAccount);
    }

    return inventoryAccount;
};

const parseOpeningStock = (openingStock: unknown): number | null => {
    if (!isNumber(openingStock) && openingStock !== null) {
        throw new Error('Incorrect or missing openingStock: ' + openingStock);
    }

    return openingStock;
};

const parseReorderPoint = (reorderPoint: unknown): number | null=> {
    if (!isNumber(reorderPoint) && reorderPoint !== null) {
        throw new Error('Incorrect or missing reorderPoint: ' + reorderPoint);
    }

    return reorderPoint;
};

const parsePreferredVendor = (preferredVendor: unknown): string | null=> {
    if (!isString(preferredVendor) && preferredVendor !== null) {
        throw new Error('Incorrect or missing preferredVendor: ' + preferredVendor);
    }

    return preferredVendor;
};

const parseWeight = (weight: unknown): number | null => {
    if (!isNumber(weight) && weight !== null) {
        throw new Error('Incorrect or missing weight: ' + weight);
    }

    return weight;
};

const parseQuantity = (quantity: unknown): number | null => {
    if (!isNumber(quantity) && quantity !== null) {
        throw new Error('Incorrect or missing quantity: ' + quantity);
    }

    return quantity;
};

const parseManufacturer = (manufacturer: unknown): string | null => {
    if (!isString(manufacturer) && manufacturer !== null) {
        throw new Error('Incorrect or missing manufacturer: ' + manufacturer);
    }

    return manufacturer;
};

const parseCode = (code: unknown): string | null => {
    if (!isString(code) && code !== null) {
        throw new Error('Incorrect or missing code: ' + code);
    }

    return code;
};

const parseBrandId = (brandId: unknown): string | null => {
    if (!isString(brandId) && brandId !== null) {
        throw new Error('Incorrect or missing brandId: ' + brandId);
    }

    return brandId;
};

const parseProductDate = (productDate: unknown): string | null => {
    if ((!isString(productDate) || !isDate(productDate)) && productDate !== null) {
        throw new Error('Incorrect or missing productDate: ' + productDate);
    }

    return productDate;
};

export default toNewProductEntry;