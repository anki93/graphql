
const express = require('express');
const graphqlHTTP = require('express-graphql');


const schema = require("./graphql/schema")


const fakeDatabase = [];


class Message {
  constructor(id, input){
    this.id = id;
    this.content = input.content;
    this.author = input.author;
  }
}

var root = {

  createMessage: ({ input }) => {
    var id = require('crypto').randomBytes(10).toString('hex');
    fakeDatabase[id] = input;
    return new Message(id, input);
  },

  getMessage: ({ id }) => {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id);
    }
    return new Message(id, fakeDatabase[id]);
  },

};

var app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');