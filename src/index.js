import express from 'express';
import morgan from 'morgan';
import Router from './routes/index.js';
import { engine } from 'express-handlebars';
import db from '../src/config/db/index.js';
const app = express();
const port = 3001;
//connect db
db();

//cau hinh truy cap static file
app.use(express.static('./src/public'));
//http logger
app.use(morgan('combined'));
//khai báo req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//template/engine
//khai báo công nghệ sử dụng và cấu hình
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

Router(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
