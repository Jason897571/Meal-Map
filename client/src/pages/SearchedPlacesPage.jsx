import { useEffect, useState } from 'react'
import { Container, Col, Form, Button, Card, Row } from 'react-bootstrap'

const SearchedPlacesPage = () => {
  // create state which will hold/save the users searched place into array
  const [searchedPlaces, setSearchedPlaces] = useState([])

  // create state which will hold our search input value
  const [searchInput, setSearchInput] = useState('')

  const noResults = (
    <>
      {' '}
      <h3 className="noResult text-3lg capitalize hover:uppercase bg-slate-50">
        Please search for place to begin!
      </h3>
    </>
  )

  return (
    <>
      <div className="text-light bg-pink-500 p-5">
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

        <Container>
          <h2 className="pt-5">
            {searchedPlaces.length
              ? `Viewing ${searchedPlaces.length}`
              : noResults}
          </h2>
        </Container>
      </div>
    </>
  )
}

export default SearchedPlacesPage
