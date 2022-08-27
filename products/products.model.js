const products = [
    {
        id: 1,
        description: 'Red Shoe',
        price: 42.12,
        reviews: [],
    },
    {
        id: 2,
        description: 'Blue Jeans',
        price: 55.55,
        reviews: [],
    }
];

function getAllProducts() {
    return products;
}

function getProductById(id) {
    return products.find(product => product.id === id);
}

function getProductsByPrice(min, max) {
    return products.filter(product => {
        return product.price >= min && product.price <= max;
    })
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        price,
        reviews: [],
        description,
    };

    products.push(newProduct);

    return newProduct;
};

function addNewProductReview(productId, rating, comment) {
    const product = getProductById(productId);

    if (product) {
        const newReview = {
            rating,
            comment,
        };

        product.reviews.push(newReview);

        return newReview;
    }

    throw new Error(`It was not possible to add the review. Product of id ${productId} was not found`);
}

module.exports = {
    addNewProduct,
    getAllProducts,
    getProductById,
    getProductsByPrice,
    addNewProductReview,
};