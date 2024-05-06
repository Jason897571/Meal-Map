import { useEffect, useState } from 'react'
import { Container, Col, Form, Button, Card, Row } from 'react-bootstrap'
import { useMutation } from '@apollo/client'

// TODO uncomment this and make edits of required
// import { SAVE_PLACE } from '../utils/mutations'

const SearchedPlacesPage = () => {
  // create state which will hold/save the users searched place into array
  const [searchedPlaces, setSearchedPlaces] = useState([])

  // create state which will hold our search input value
  const [searchInput, setSearchInput] = useState('')

  // TODO MAKE SURE THE MUTATION NAMES ARE CORRECT
  // Define useMutation hook for SAVE_PLACE mutation
  // const [savePlace, { error }] = useMutation(SAVE_PLACE)

  // this is the no results condition
  const noResults = (
    <>
      {' '}
      <p className="noResult text-3lg capitalize hover:uppercase bg-slate-50">
        Please search for place to begin!
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
          <Form>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control id="#link" placeholder="Search for anything..." />
              </Col>
              <Col xs={12} md={4}>
                {' '}
                <Button variant="dark"> Submit Search</Button>
              </Col>
            </Row>
          </Form>{' '}
        </Container>

        <Container id="top-choices">
          {/* tereny operator to conditionally render h2 header*/}
          <h2 className="pt-5">
            {searchedPlaces.length
              ? `Viewing ${searchedPlaces.length}`
              : noResults}
          </h2>
          {/* // if user has search a place then display the results in row format
          and each place will take up 4 columns */}
          <Row>
            {searchedPlaces.map((place) => {
              return <Col md={4} key={place.placeId}></Col>
            })}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default SearchedPlacesPage
