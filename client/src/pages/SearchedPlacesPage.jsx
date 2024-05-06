import { useEffect, useState } from 'react'
import { Container, Col, Form, Button, Card, Row } from 'react-bootstrap'
import { useLazyQuery } from '@apollo/client'
import { QUERY_RESTAURANTS } from '../utlis/queries'

const SearchedPlacesPage = () => {
  // create state which will hold our search input value
  const [searchInput, setSearchInput] = useState('')
  const [executeSearch, { loading, data, error }] =
    useLazyQuery(QUERY_RESTAURANTS)
  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log('test')
    executeSearch({ variables: { city: 'Toronto', limit: 10 } })
  }
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
          <Row>
            {data &&
              data.restaurants.map((place) => (
                <Col md={4} key={place.place_id}>
                  {/* Example place display */}
                  <div>{place.name}</div>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default SearchedPlacesPage
