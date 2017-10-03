interface IProduct {
    id: number;
    name: string;
    line: string;
    size: string;
    price: number;
    promo: number;
    images: Array<String>;
}

export default IProduct;