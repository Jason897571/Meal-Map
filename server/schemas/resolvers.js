const User = require('../models')
const { signToken, AuthenticationError } = require('../utils/Auth')
const axios = require('axios')
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

const resolvers = {
  Query: {
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
      }

      throw AuthenticationError
    },

    user: async (_, { userId }) => {
      return User.findOne({ _id: userId })
    },
    //donation checkout
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Donation',
                description: 'Thank you for your donation',
              },
              unit_amount: args.donation.amount * 100, // Stripe expects amount in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      })

      return { session: session.id }
    },

    restaurants: async (_, { city }) => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/textsearch/json`,
          {
            params: {
              query: `restaurants in ${city}`,
              key: process.env.GOOGLE_API_KEY,
            },
          },
        )

        if (response.status !== 200) {
          throw new Error(`Failed to fetch restaurants: ${response.statusText}`)
        }

        return response.data.results.map((place) => ({
          place_id: place.place_id,
          name: place.name,
          location: place.vicinity,
          formatted_address: place.formatted_address,
          rating: place.rating,
          photoUrl: place.photos
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${process.env.GOOGLE_API_KEY}`
            : null,
        }))
      } catch (err) {
        console.error(err)
        throw new Error('Error fetching restaurant data')
      }
    },
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password })
      const token = signToken(user)

      return { token, user }
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email })

      if (!user) {
        throw AuthenticationError
      }

      const correctPassword = await user.isCorrectPassword(password)

      if (!correctPassword) {
        throw AuthenticationError
      }

      const token = signToken(user)
      return { token, user }
    },
    addFavorite: async (_, { places }, context) => {
     
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { favorite: { $each: places } } },
          {
            new: true,
          },
        )
      }
      throw AuthenticationError
    },
    removeFavorite: async (_, { places }, context) => {
      if (context.user) {
        const { place_id } = places[0];
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { favourites: {place_id:place_id} } },
          { new: true },
        )
      }
      throw AuthenticationError
    },
    addReview: async (_, { locationId, rating, review }, context) => {
      if (context.user) {
        const newReview = new reviewSchema({ locationId, rating, review })

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { reviews: newReview } },
          { new: true },
        )
      }
      throw AuthenticationError
    },
    removeReview: async (_, { reviewId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { reviews: { _id: reviewId } } },
          { new: true },
        )
      }
    },
  },
}

module.exports = resolvers
