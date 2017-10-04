"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
var sequelize = new Sequelize('ammo_teste', 'harry', 'senhateste', { dialect: 'postgres' });
const Product = sequelize.define('products', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    line: { type: Sequelize.STRING },
    size: { type: Sequelize.STRING },
    price: { type: Sequelize.STRING },
    promo: { type: Sequelize.STRING },
    // Big hack, probably will create a relationship to store images
    images: { type: Sequelize.JSON, defaultValue: ['http://lorempixel.com/50/50', 'http://lorempixel.com/50/50', 'http://lorempixel.com/50/50', 'http://lorempixel.com/50/50'] }
});
exports.default = Product;
//# sourceMappingURL=Product.js.map