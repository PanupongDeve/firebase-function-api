

import { Router } from 'express';

class Dogs {
    constructor() {
        this.router = Router();
        this.router.get('/', this.get);
        this.router.get('/:id', this.getById);
        this.router.patch('/:id', this.updateById);
        this.router.delete('/:id', this.delete)
        this.router.post('/create', this.create);
    }


    async get(req, res) {
        return await res.send('get success');
    }

    async getById(req, res) {
        const { id } = req.params
        return await res.send(`get by ${id} success`);
    }

    async create(req, res) {
        return await res.send(`create success!!`);
    }

    async updateById(req, res) {
        const { id } = req.params
        return await res.send(`update by ${id} success`);
    }

    async delete(req, res) {
        const { id } = req.params
        return await res.send(`delete by ${id} success`);
    }

}

export default new Dogs().router;


