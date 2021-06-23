const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const Post = require("./models/Post");
const { MONGO_DB } = require("./config");

const typeDefs = require("./graphql/typeDefs")
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected!");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
