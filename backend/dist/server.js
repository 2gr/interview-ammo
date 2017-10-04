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
const Product_1 = require("./Model/Product");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.port || 3001;
var router = express.Router();
router.get('/', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var query = req.query.query || 'Kit';
        var page = parseInt(req.query.page) || 1;
        var limit = parseInt(req.query.limit) || 2;
        var offset = limit * (page - 1);
        var products = yield Product_1.default.findAndCountAll({
            where: { name: { $ilike: `%${query}%` } },
            limit: limit,
            offset: offset
        });
        res.json({
            data: products.rows,
            page: page,
            total: products.count
        });
    });
});
app.use(router);
app.listen(port);
console.log("Listening on " + port);
//# sourceMappingURL=server.js.map