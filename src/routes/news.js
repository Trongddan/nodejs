import express from 'express';
import NewsController from '../app/controllers/NewsController.js';
const router = express.Router();
router.use('/', NewsController.index);
export default router;
