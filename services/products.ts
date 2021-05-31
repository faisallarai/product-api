import * as uuid from 'uuid';
import { Identifier } from 'sequelize';
import { ProductAttributes, ProductCreationAttributes, ProductInstance } from '../interfaces/product';
import Product from '../models/product';
import { Op } from 'sequelize';
import paginationService from '../utils/pagination';


type Fields = {
    name: unknown,
    productType: unknown,
    returnable: unknown,
    page: unknown,
    size: unknown,
};

type Data = {
    rows: ProductInstance[];
    count: number;
};

type ProductResponse = {
    data: Data,
    offset: number;
    limit: number;
};

const getAll = async ({ name, productType, returnable, page, size}: Fields): Promise<ProductResponse> => {

    let conditions = {};

    if (productType && returnable) {
        conditions = { 
            [Op.and]: {
                productType: {
                    [Op.iLike]: `%${productType}%`
                },
                returnable: returnable
            }
        };
    } else if (productType) {
        conditions = { 
            productType: {
                [Op.iLike]: `%${productType}%`
            }
        };
    } else if (returnable) {
        conditions = { 
            returnable: returnable
        };
    } else if (name) {
        conditions = { 
            name: {
                [Op.iLike]: `%${name}%`
            }
        };
    }
    const { offset, limit } = paginationService.getPagination(page as number, size as number);

    const data = await Product.findAndCountAll({
        where: conditions,
        offset: offset,
        limit: limit
    });

    return {
        data,
        offset,
        limit
    };
};

const getOne = async (id: Identifier): Promise<ProductAttributes> => {
    const product = await Product.findByPk(id, {
        rejectOnEmpty: true
    });

    return product;
}; 

const add = async (newObject: ProductCreationAttributes): Promise<ProductAttributes> => {

    const newProduct = {
        ...newObject,
        id: uuid.v4()
    };

    const product = await Product.create(newProduct);

    return product;
    
};

type ProductProp = {
    no: number;
    product: ProductInstance[];
};

const edit = async (newObject: ProductAttributes, id: string | undefined): Promise<ProductProp> => {
    const [no, product] = await Product.update(newObject, { returning: true, where: { id: id } });
    
    return { 
        no,
        product
    };
};


const productsService = {
    getAll,
    getOne,
    add,
    edit,
};


export default productsService;