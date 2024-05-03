import { useEffect, useState } from 'react'
import { Container, Col, Form, Button, Card, Row } from 'react-bootstrap'

const SearchedPlaces = () => {
  // create state which will hold/save the users searched place into array
  const [searchedPlaces, setSearchedPlaces] = useState([])

  // create state which will hold our search input value
  const [searchInput, setSearchInput] = useState('')

  return (
    <>
      <div className="text-light bg-pink-500 p-5">
        <Container>
          <h1 className="fs-1 mb-5 text-left">Search for Your Cravings!</h1>
          <Form>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control placeholder="Search for anything..." />
              </Col>
              <Col xs={12} md={4}>
                {' '}
                <Button variant="dark"> Submit Search</Button>
              </Col>
            </Row>
          </Form>{' '}
        </Container>
      </div>
    </>
  )
}

export default SearchedPlaces
