const User = require('../models')
const { signToken, AuthenticationError } = require('../utils/Auth')
const axios = require('axios')

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
    restaurants: async (_, { latitude, longitude }) => {
      const response = await axios.getAdapter(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
        {
          params: {
            location: `${latitude},${longitude}`,
            readius: 1500,
            type: 'restaurant',
            key: process.env.GOOGLE_API_KEY,
          },
        },
      )
      return response.data.results.map((place) => ({
        name: place.name,
        location: place.vicinity,
        rating: place.rating,
      }))
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
      return { token, profile }
    },
    addFavourite: async (_, { locationId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { favourites: locationId } },
          {
            new: true,
          },
        )
      }
      throw AuthenticationError
    },
    removeFavourite: async (_, { locationId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { favourites: locationId } },
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
