
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

const validator = require('validator');
 
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
      },
      resolve: async (rootValue, { input }) => {

        if(validator.isEmpty(input.content)) {
          throw new Error('Content is required.');
        }

        if(validator.isEmpty(input.author)) {
          throw new Error('Author is required.');
        }
          
        if (!validator.isEmail(input.email)) {
          throw new Error('Email is not in valid format');
        }
        
        return rootValue.createMessage({ input })
      }
    }

  }
  
}


