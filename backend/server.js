var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.port || 3001;

var router = express.Router();

router.get('/', async function(req, res) {

    const Sequelize = require('sequelize');
    var sequelize = new Sequelize('ammo_teste', 'harry', 'senhateste', {dialect: 'postgres'});

    const Product = sequelize.define(
        'products', {
            id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
            name: {type: Sequelize.STRING, allowNull: false}
        }
    );

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