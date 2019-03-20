import express from 'express';

const app = express();

app.get('/', async (req, res) => {
    res.send('555555555555')
});

module.exports = app;
