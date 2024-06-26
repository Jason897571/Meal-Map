import { useEffect, useState } from 'react'
import { Container, Col, Form, Button, Card, Row } from 'react-bootstrap'
import { useLazyQuery, useMutation } from '@apollo/client'
import { QUERY_RESTAURANTS } from '../utlis/queries'
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../utlis/mutations'

const SearchedPlacesPage = () => {
  // create state which will hold our search input value
  const [searchInput, setSearchInput] = useState('')
  const [favorites, setFavorites] = useState({})
  const [executeSearch, { loading, data, error }] =
    useLazyQuery(QUERY_RESTAURANTS)

  const [addFavorite] = useMutation(ADD_FAVORITE)
  const [removeFavorite] = useMutation(REMOVE_FAVORITE)
  const handleFormSubmit = (event) => {
    event.preventDefault()

    executeSearch({ variables: { city: searchInput, limit: 10 } })
  }

  const handleFavoriteButton = (placeId) => {
    setFavorites((prevState) => {
      const newFavorites = {
        ...prevState,
        [placeId]: !prevState[placeId],
      }

      
      
      let restaurants = JSON.parse(localStorage.getItem('restaurants'))
      let favoriteRestaurant = restaurants.restaurants.find(
        (restaurant) => restaurant.place_id === placeId,
      )
      const { place_id, name, formatted_address, rating, photoUrl } =favoriteRestaurant
      // if it is favorite, call addFavorite mutation
      if (newFavorites[placeId]) {
        addFavorite({
          variables: {
            places: [{ place_id, name, formatted_address, rating, photoUrl }],
          },
        })
      } else {
        // if not favorite call removeFavorite mutation
        removeFavorite({
          variables: {
            places:{ place_id, name, formatted_address, rating, photoUrl }
          },
        })
        
      }

      return newFavorites
    })
  }

  useEffect(() => {
    if (data) {
      localStorage.setItem('restaurants', JSON.stringify(data))
    }
  }, [data, favorites])

  // this is the no results condition
  const noResults = (
    <>
      {' '}
      <p className="noResult text-3lg capitalize hover:uppercase bg-slate-50">
        Please search for your city to begin!
      </p>
    </>
  )

  return (
    <>
      <div className="text-light bg-pink-500 p-5">
        {/* this is the search input for user */}
        <Container>
          <h1 className="fs-1 mb-4 uppercase  text-left font-bold">
            Search for Your Cravings!
          </h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  onChange={(e) => setSearchInput(e.target.value)}
                  id="#link"
                  placeholder="Search for anything..."
                />
              </Col>
              <Col xs={12} md={4}>
                {' '}
                <Button type="submit" variant="dark">
                  {' '}
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>{' '}
        </Container>

        <Container id="top-choices">
          {/* tereny operator to conditionally render h2 header*/}
          <h2 className="pt-5">
            {loading
              ? 'Loading...'
              : error
                ? `Error: ${error.message}`
                : data && data.restaurants.length
                  ? `Viewing ${data.restaurants.length} places`
                  : noResults}
          </h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {data &&
              data.restaurants.map((place) => (
                <div className="col" key={place.place_id}>
                  <div className="card">
                    <img
                      src={place.photoUrl}
                      className="card-img-top result-image"
                      alt="Restaurant Photo"
                    />
                    <div className="icon-container">
                      <button
                        className="favorite-btn"
                        id="favorite-btn"
                        onClick={() => handleFavoriteButton(place.place_id)}
                      >
                        <img
                          className="favorite-icon"
                          src={
                            favorites[place.place_id]
                              ? '/image/heart.png'
                              : '/image/love.png'
                          }
                          alt=""
                        />
                      </button>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{place.name}</h5>
                      <p className="card-text">Rating: {place.rating} / 5</p>
                      <p className="card-address">
                        Address: {place.formatted_address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </Container>
      </div>
    </>
  )
}

export default SearchedPlacesPage
