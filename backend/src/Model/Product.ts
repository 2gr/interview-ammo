import * as Sequelize from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();
var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {dialect: 'postgres'});

const Product = sequelize.define(
    'products', {
        id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        name: {type: Sequelize.STRING, allowNull: false},
        line: {type: Sequelize.STRING},
        size: {type: Sequelize.STRING},
        price: {type: Sequelize.STRING},
        promo: {type: Sequelize.STRING},
        // Big hack, probably will create a relationship to store images
        images: {type: Sequelize.JSON, defaultValue: ['http://lorempixel.com/50/50','http://lorempixel.com/50/50','http://lorempixel.com/50/50','http://lorempixel.com/50/50']}
    }
);

export default Product;