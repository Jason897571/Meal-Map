import { gql } from '@apollo/client'

const GET_RESTAURANTS_QUERY = gql`
  query GetRestaurants($latitude: Float!, $longitude: Float!) {
    restaurants(latitude: $latitude, longitude: $longitude) {
      name
      location
      rating
      photoUrl
    }
  }
`

export default GET_RESTAURANTS_QUERY
