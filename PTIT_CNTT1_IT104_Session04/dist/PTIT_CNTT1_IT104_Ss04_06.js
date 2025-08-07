"use strict";
const getFinalPrice = (product) => {
    if (product.discount) { //ktra sp co discount ko
        return product.price * (1 - product.discount); //price*(% sau giam)
    }
    return product.price; //return neu ko giam
};
const printProductInfo = (product) => {
    const originalPrice = product.price.toLocaleString('vi-VN');
    const finalPrice = getFinalPrice(product).toLocaleString('vi-VN');
    console.log(`Ten: ${product.name}`);
    console.log(`Gia goc: ${originalPrice} VND`);
    console.log(`Gia sau giam: ${finalPrice} VND`);
    console.log(`Danh muc: ${product.category.name}`);
};
const list = [
    {
        id: "SP1",
        name: "Ao so mi",
        price: 300000,
        discount: 0.2,
        category: {
            id: "1",
            name: "Thoi trang nam"
        }
    },
    {
        id: "SP2",
        name: "Ao vest",
        price: 400000,
        discount: 0.5,
        category: {
            id: "1",
            name: "Thoi trang nam"
        }
    },
    {
        id: "SP3",
        name: "Ao dai",
        price: 500000,
        discount: 0.8,
        category: {
            id: "2",
            name: "Thoi trang nu"
        }
    }
];
list.forEach(printProductInfo);
