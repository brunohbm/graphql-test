const products = [
    {
        id: ' redshoe',
        decription: 'Red Shoe',
        price: 42.12,
    },
    {
        id: 'bluiejean',
        description: 'Blue Jeans',
        price: 55.55
    }
];

function getAllProducts() {
    return products;
}

module.exports = {
    getAllProducts,
};