 
import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
  mutation SignupUser($name: String!, $email: String!, $password: String!) {
    signupUser(name: $name, email: $email, password: $password) {
      id
      name
      email
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      email
      token
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($name: String!) {
    addUser(name: $name) {
      _id
      name
      email
      password
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

