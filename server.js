const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const app = express();

const schema = buildSchema(`
    type Query {
        orders: [Order]
        products: [Product]
    }

    type Product {
        id: ID!
        price: Float!
        description: String!
        reviews: [Review]
    }

    type Review {
        rating: Int!
        comment: String
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
`);

const rootValue = {
    products: [
        {
            id:' redshoe',
            decription: 'Red Shoe',
            price: 42.12,
        },
        {
            id:'bluiejean',
            description: 'Blue Jeans',
            price: 55.55
        }
    ],
    orders: [
        {
            date: '2005-05-05',
            subtotal: 90.22,
            items: [
                {
                    product: {
                        id:' redshoe',
                        decription: 'Red Shoe',
                        price: 42.12,
                    },
                    quantity: 2,
                }
            ]
        },
    ],
};

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
}))

app.listen(3000, () => {
    console.log("Running GraphQL server...");
});