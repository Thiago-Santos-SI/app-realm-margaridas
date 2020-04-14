export default class ProductEntity {
    productId: number;
    productName: string;
    productQuant: number;
    productPrice: number;


    constructor(productId = 1, productName = '', productQuant = 0, productPrice = 0) {
        this.productId = productId;
        this.productName = productName;
        this.productQuant = productQuant;
        this.productPrice = productPrice;
    }

    getRealmObject() {
        return {
            productId: this.productId,
            productName: this.productName,
            productQuant: this.productQuant,
            productPrice: this.productPrice
        };
    }

    updateObjectInfo(hero: any) {
        if (!hero)
            return;

        hero['productName'] = this.productName;
    }

    clone() {
        return new Product(this.productId, this.productName);
    }
}

const HeroSchema = {
    name: 'Hero',
    properties: {
        productId: 'int',
        productName: 'string',
        productQuant: 'int',
        productPrice: 'int'
    }
};

ProductEntity.schema = HeroSchema;
