const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// mongoose connection
mongoose.connect('mongodb://localhost:27017/bwa-graphql', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: true
});

const server = new ApolloServer({ typeDefs, resolvers });

server.listen()
  .then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });