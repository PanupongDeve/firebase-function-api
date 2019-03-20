import express from 'express';
import handlController from './controller';
const app = express();


handlController(app);

module.exports = app;
