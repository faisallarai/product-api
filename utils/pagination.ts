import { ProductInstance } from "../interfaces/product";

const getPagination = (page: number, size: number) => {
    const limit = size ? +size : 3; // default
    const offset = page ? page * limit : 0; // default
    return {
        offset,
        limit
    };
};

const getPaginationData = ({ count, rows}: { count: number, rows: ProductInstance[]}, page: number, limit: number) => {

    // const { count: totalItems, rows: items } = data;
    
    // const currentPage = page ? +page : 0 
    const currentPage = Math.floor(page / limit);

    const totalPages = Math.ceil(count / limit);

    return {
        totalItems: count,
        items: rows,
        currentPage,
        totalPages
    };
};

const paginationService = {
    getPagination,
    getPaginationData
};

export default paginationService;