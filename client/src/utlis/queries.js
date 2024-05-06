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
  query getCheckout($donation: DonationInput) {
    checkout(donation: $donation) {
      session
    }
  }
`

export const QUERY_RESTAURANTS = gql`
  query GetRestaurants($city: String!, $limit: Int) {
    restaurants(city: $city, limit: $limit) {
      place_id
      name
      location
      rating
      photoUrl
    }
  }
`
