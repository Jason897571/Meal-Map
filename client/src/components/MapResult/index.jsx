import { useState } from 'react'
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps'

const APIKEY = process.env.GOOGLE_API_KEY

export default function MapResult(data) {
  return
  ;<APIProvider>
    <div style={{ height: '100vh' }} className="map-list">
      <Map zoom={9} center={restaurant.location}></Map>
    </div>
  </APIProvider>
}
