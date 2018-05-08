
const {
  GraphQLSchema,
  GraphQLObjectType
} = require("graphql")

const {
  messageQuery,
  messageMutation
} = require("./message/message")


module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...messageQuery,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...messageMutation,
    }),
  }),
});