"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Quick migration + seed until I can find a better way to do it w/ sequelize-cli and TS
const Product_1 = require("../Model/Product");
Product_1.default.sync({ force: true }).then(() => {
    Product_1.default.create({
        name: "Kit de cama 210 fios",
        line: "Classic I",
        size: "Solteiro Extra",
        price: "R$298,00",
        promo: "R$98,00"
    });
    Product_1.default.create({
        name: "Kit de cama 210 fios",
        line: "Classic I",
        size: "Casal Extra",
        price: "R$398,00",
        promo: "R$198,00"
    });
    Product_1.default.create({
        name: "Kit de cama 210 fios",
        line: "Classic II",
        size: "Solteiro",
        price: "R$198,00",
        promo: "R$58,00"
    });
    Product_1.default.create({
        name: "Kit de cama 300 fios",
        line: "Premium II",
        size: "Solteiro",
        price: "R$500,00",
        promo: ""
    });
});
//# sourceMappingURL=2017_10_04_135330_creates_products_table.js.map