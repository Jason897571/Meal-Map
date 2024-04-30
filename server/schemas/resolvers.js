const { User } = require('../models')
const { signToken, AuthenticationError } = require('../utils/Auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }

            throw AuthenticationError;
        },

        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId })
        },
    }
}

module.exports = resolvers;