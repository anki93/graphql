
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
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
          type: GraphQLString 
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


