const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const schema = buildSchema(`
    type Query {
        price: Float
        description: String
    }
`);

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: {
        price: 300,
        description: 'Teste',
    }
}))

app.listen(3000, () => {
    console.log("Running GraphQL server...");
});