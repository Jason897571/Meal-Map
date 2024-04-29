const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'yummmmmmy';
const expiration = '24h';

module.exports = {
    AuthenticationError: new GraphQLError("User could not be authenticated.", {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),


    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.header.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (! token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('token not valid');
        } 
        
        return req;
     },


     signToken: function ({ email, name, _id }) {
        const payload = { email, name, _id };
        return jwt.sign({ data: payload }, secret, {expiresIn: expiration });
     }
}