"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
var sequelize = new Sequelize('ammo_teste', 'harry', 'senhateste', { dialect: 'postgres' });
const Product = sequelize.define('products', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false }
});
exports.default = Product;
//# sourceMappingURL=Product.js.map