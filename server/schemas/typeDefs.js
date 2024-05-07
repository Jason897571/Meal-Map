const typeDefs = `
    type User {
        _id: ID
        username: String!
        email: String!
        password: String
        favorite: [Restaurant]
        reviews: [Review]
    }
    type Restaurant {
        place_id: String
        name: String
        location: String
        rating: Float
        photoUrl: String
      }
    input RestaurantInput {
    place_id: String
    name: String
    location: String
    rating: Float
    photoUrl: String
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
    type Donation {
        _id: ID
        donationDate: String
        donationAmount: Int
        
    }

    input DonationInput {
        amount: Int
        
    }

    type Checkout{
        session: ID
    }


    type Query {
        me: User
        user(userId: ID!): User
        checkout(donation: DonationInput): Checkout
        restaurants(city: String!, limit: Int): [Restaurant]
    }
    type Mutation { 
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addReview(review: ReviewInput!): User
        addFavorite(places: [RestaurantInput]!): User
        removeReview(reviewId: ID!): User
        removeFavorite(places: [RestaurantInput]!): User
    }
`

module.exports = typeDefs
