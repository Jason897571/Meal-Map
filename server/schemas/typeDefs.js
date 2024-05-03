const typeDefs = `
    type User {
        _id: ID
        username: String!
        email: String!
        password: String
        favoriteRestaurants: [ID]
        reviews: [Review]
    }
    type Restaurant {
        name: String
        location: String
        rating: Float
      }
    type Review {
        _id: ID
        username: String
        locationID: String
        rating: Int!
        review: String
    }
    input ReviewInput {
        _id: ID
        username: String
        locationID: String
        rating: Int!
        review: String
    }
    type Auth {
        token: ID!
        user: User
      }
    type Query {
        me: User
        user(userId: ID!): User
        restaurants(latitude: Float!, longitude: Float!): [Restaurant]
    }
    type Mutation { 
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addReview(review: ReviewInput!): Review
        addFavourite(userId: ID!, locationId: ID!): User
        removeReview(reviewId: ID!): User
        removeFavourite(userId: ID!, locationId: ID!): User
    }
`;

module.exports = typeDefs;