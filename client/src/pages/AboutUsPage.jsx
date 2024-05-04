import { Container } from 'react-bootstrap'
import OurMission from '../components/AboutUsComponents/OurMission'
import WhatWeOffer from '../components/AboutUsComponents/WhatWeOffer'

export default function AboutUsPage() {
  return (
    <>
      <div className="about-us p-5">
        <Container>
          <h1 className="text-3xl mb-4 uppercase font-bold">About Us</h1>
          <p className="text-lg fw-medium ">
            Welcome to our community! We are a passionate group of developers
            with a shared love for great food and exciting travel experiences.
            Our journey began with a simple idea: to create a platform where
            people from all walks of life can come together to share and
            discover incredible places to eat and visit around the world.{' '}
          </p>
          <OurMission />
          <WhatWeOffer />
        </Container>
      </div>
    </>
  )
}
