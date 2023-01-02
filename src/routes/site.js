import express from 'express';
import SiteContrller from '../app/controllers/SiteController.js';
const router = express.Router();
router.use('/search', SiteContrller.search);
router.use('/', SiteContrller.home);

export default router;
