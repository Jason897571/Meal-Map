 
import { gql } from '@apollo/client';


export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!,$email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_FAVORITE_RESTAURANT = gql`
  mutation AddFavoriteRestaurant($restaurantId: String!) {
    addFavoriteRestaurant(restaurantId: $restaurantId) {
      id
      favoriteRestaurants
    }
  }
`;

export const REMOVE_FAVORITE_RESTAURANT = gql`
  mutation RemoveFavoriteRestaurant($restaurantId: String!) {
    removeFavoriteRestaurant(restaurantId: $restaurantId) {
      id
      favoriteRestaurants
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation AddReview($restaurantId: String!, $title: String!, $content: String!, $rating: Int!) {
    addReview(restaurantId: $restaurantId, title: $title, content: $content, rating: $rating) {
      id
      reviews {
        title
        content
        rating
      }
    }
  }
`;

export const REMOVE_REVIEW = gql`
  mutation RemoveReview($restaurantId: String!, $reviewId: String!) {
    removeReview(restaurantId: $restaurantId, reviewId: $reviewId) {
      id
      reviews {
        title
        content
        rating
      }
    }
  }
`;

