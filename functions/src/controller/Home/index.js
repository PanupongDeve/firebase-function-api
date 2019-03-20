import { Router } from 'express';

class Home {
    constructor() {
        this.router = Router();
        this.router.get('/', this.home);
    }

    async home(req, res) {
        return await res.send('Test');
    }
}

export default new Home().router;