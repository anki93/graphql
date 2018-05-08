
const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInputObjectType
 } = require("graphql")


module.exports =  {

  messageType:  new GraphQLObjectType({
    name:"Message",
    fields: {
      id: {
        type: GraphQLString
      },
      content: {
        type: GraphQLString
      },
      author: {
        type: GraphQLString
      }
    }
  }),

  messageInputType:  new GraphQLInputObjectType({
    name: "MessageInput",
    fields: {
      content: {
        type: new GraphQLNonNull(GraphQLString),
      },
      author: {
        type: new GraphQLNonNull(GraphQLString)
      }
    }
  })
  
}
