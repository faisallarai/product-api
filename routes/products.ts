/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import express from 'express';
import { Identifier } from 'sequelize';
import { checkJwt } from '../middleware/auth';

import productsService from '../services/products';
import toNewProductEntry from '../utils/toNewProductEntry';
import paginationService from '../utils/pagination';


const router = express.Router();

router.use(checkJwt);

router.get('/', (req, res) => {
    try {

        productsService.getAll({
            name: req.query['name'],
            productType: req.query['productType'],
            returnable: req.query['returnable'],
            page: req.query['page'],
            size: req.query['size']
        }).then(responses => {
            if(responses) {
                const { data, offset, limit } = responses;
                const response = paginationService.getPaginationData(data, offset, limit);
                res.json(response);
            }
        }).catch(err => {
            res.status(400).json(err.message);
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', (req, res) => {
    try {
        const { id } = req.params;

        productsService.getOne(id as Identifier).then(product => {
            res.json(product);
        }).catch(err => {
            res.status(404).json(err.message);
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.post('/', (req, res) => {

    try {
        console.log('body', req.body);

        const newObject = toNewProductEntry(req.body);

        console.log('newObject', newObject);
        productsService.add(newObject).then(product => {
            console.log('product', product);
            res.json(product);
        }).catch(validation => {
            res.status(422).json({
                errors: validation.errors.map((error: { path: unknown; message: unknown; }) => {
                    return {
                        attribute: error.path,
                        message: error.message
                    };
                })
            });
        });
    } catch (error) {
        //console.log('t', error, error.message);
        res.status(500).json(error.message);
    }
    
});

router.put('/:id', (req, res) => {
    try {

        const { id } = req.params;
        const newObject = toNewProductEntry(req.body);

        productsService.edit(newObject, id).then(product => {
            res.json(product);
        }).catch(validation => {
            console.log('validation omutuo', validation);
            res.status(422).json({
                errors: validation.errors.map((error: { path: unknown; message: unknown; }) => {
                    return {
                        attribute: error.path,
                        message: error.message
                    };
                })
            });
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.patch('/:id', (req, res) => {
    try {

        const { id } = req.params;
        const newObject = toNewProductEntry(req.body);

        productsService.edit(newObject, id).then(product => {
            res.json(product);
        }).catch(err => {
            res.status(404).send(err.message);
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/:id', (req, res) => {
    try {

        const { id } = req.params;
        const newObject = toNewProductEntry(req.body);

        productsService.edit(newObject, id).then(product => {
            res.json(product);
        }).catch(err => {
            res.status(404).send(err.message);
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

export default router;