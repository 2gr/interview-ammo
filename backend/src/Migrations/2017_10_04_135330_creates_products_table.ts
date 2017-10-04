// Quick migration + seed until I can find a better way to do it w/ sequelize-cli and TS
import Product from '../Model/Product';

Product.sync({force: true}).then(() => {
    Product.create({
        name: "Kit de cama 210 fios",
        line: "Classic I",
        size: "Solteiro Extra",
        price: "R$298,00",
        promo: "R$98,00"
    });
    Product.create({
        name: "Kit de cama 210 fios",
        line: "Classic I",
        size: "Casal Extra",
        price: "R$398,00",
        promo: "R$198,00"
    });
    Product.create({
        name: "Kit de cama 210 fios",
        line: "Classic II",
        size: "Solteiro",
        price: "R$198,00",
        promo: "R$58,00"
    });
});

