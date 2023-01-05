import express from 'express';
import SiteContrller from '../app/controllers/SiteController.js';
const router = express.Router();
router.use('/search', SiteContrller.search);
router.post('/create', SiteContrller.addPost);
router.use('/', SiteContrller.home);

export default router;
