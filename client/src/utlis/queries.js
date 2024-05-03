import { gql } from '@apollo/client';

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

export const QUERY_USER =gql`
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