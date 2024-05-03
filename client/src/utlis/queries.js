import { gql } from '@apollo/client'

export const QUERY_ME = gql`
  query Query {
    me {
      _id
      username
      email
      favoriteRestaurants
      reviews {
        _id
        username
        locationID
        rating
        review
      }
    }
  }
`

export const QUERY_USER = gql`
  query Query($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      favoriteRestaurants
      reviews {
        username
        _id
        locationID
        rating
        review
      }
    }
  }
`

export const QUERY_CHECKOUT = gql`
  query donationCheckout($donation: DonationInput) {
    checkout(donation: $donation) {
      session
    }
  }
`

export const GET_RESTAURANTS_QUERY = gql`
  query GetRestaurants($latitude: Float!, $longitude: Float!) {
    restaurants(latitude: $latitude, longitude: $longitude) {
      name
      location
      rating
      photoUrl
    }
  }
`
