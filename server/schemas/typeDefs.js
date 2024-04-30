const typeDefs = `
    type User {
        _id: ID
        username: String!
        email: String!
        password: String
        favourites: [ID]
        reviews: [reviewData]
    }

    type Review {
        _id: ID
        locationID: String
        rating: Int!
        review: String
    }

    type Auth {
        token: ID!
        profile: Profile
      }

    type Query {
        me: User
        user(userId: ID!): User
        users: [User]!
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`