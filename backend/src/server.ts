import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as Sequelize from 'sequelize';
import Product from "./Model/Product";

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.port || 3001;

var router = express.Router();

router.get('/', async function(req: any, res: any) {
  
    var query = req.query.query || 'Lençol';
    var page = req.query.page || '1';
    var products = await Product.findAndCountAll({
        where: {name: {$ilike: '%teste%'}},
        limit: 20,
        offset: 0
    });

    res.json ({
        "message": "OK!",
        "query" : query,
        "page": page,
        "data": products
    });
});

app.use(router);
app.listen(port);
console.log("Listening on " + port);