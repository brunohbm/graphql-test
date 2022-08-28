const express = require("express");
const path = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typeDefs = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolvers = loadFilesSync(path.join(__dirname, '**/*.resolver.js'));

async function startApolloServer() {
    const app = express();
    const schema = makeExecutableSchema({
        typeDefs,
        resolvers,
    });
    
    const server = new ApolloServer({ schema });
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    app.listen(3000, () => {
        console.log("Running GraphQL server with Apollo...");
    });
}

startApolloServer();