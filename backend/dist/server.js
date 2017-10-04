"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const Sequelize = require("sequelize");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.port || 3001;
var router = express.Router();
router.get('/', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var sequelize = new Sequelize('ammo_teste', 'harry', 'senhateste', { dialect: 'postgres' });
        const Product = sequelize.define('products', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            name: { type: Sequelize.STRING, allowNull: false }
        });
        var query = req.query.query || 'Lençol';
        var page = req.query.page || '1';
        var products = yield Product.findAndCountAll({
            where: { name: { $ilike: '%teste%' } },
            limit: 20,
            offset: 0
        });
        res.json({
            "message": "OK!",
            "query": query,
            "page": page,
            "data": products
        });
    });
});
app.use(router);
app.listen(port);
console.log("Listening on " + port);
//# sourceMappingURL=server.js.map