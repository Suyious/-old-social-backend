const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose");

const Post = require("./models/Post");
const { MONGO_DB } = require("./config");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const pubsub =  new PubSub();
const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

mongoose
  .connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected!");
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  }) 
  .catch(err => {
    console.error(err);
  })
