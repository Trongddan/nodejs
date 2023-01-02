import newsRouter from '../routes/news.js';
import siteRouter from '../routes/site.js';
function route(app) {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

export default route;
