import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as cors from 'cors';
import * as Sequelize from 'sequelize';
import Product from "./Model/Product";

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.port || 3001;

var router = express.Router();

router.get('/', async function(req: any, res: any) {
  
    var query = req.query.query || 'Kit';
    var page = parseInt(req.query.page) || 1;
    var limit = parseInt(req.query.limit) || 2;

    var offset = limit * (page - 1);

    var products = await Product.findAndCountAll({
        where: {name: {$ilike:  `%${query}%`}},
        limit: limit,
        offset: offset
    });

    res.json ({
        data: products.rows,
        page: page,
        total: products.count
    });
});

app.use(router);
app.listen(port);
console.log("Listening on " + port);