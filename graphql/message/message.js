
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} = require("graphql")

const { 
  messageType,
  messageInputType
} = require("./messageType")

module.exports = {

  messageQuery: {
    getMessage: {
      type: messageType,
      args: {
        id : {
          type: GraphQLID 
        },
      }
    },
  },
  
  messageMutation: {

    createMessage: {
      type: messageType,
      args: {
        input: {
          type: messageInputType
        }
      }
    }

  }
  
}


