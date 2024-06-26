import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './output.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import SearchedPlacesPage from './pages/SearchedPlacesPage'
import ErrorPage from './pages/ErrorPage'
import ResultPage from './pages/ResultPage'
import Donation from './pages/Donation'
import AboutUsPage from './pages/AboutUsPage'
import YourFavoritePage from './pages/YourFavoritePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SearchedPlacesPage />,
      },
      {
        path: '/result/:id',
        element: <ResultPage />,
      },
      {
        path: '/donation',
        element: <Donation />,
      },
      {
        path: '/about-us',
        element: <AboutUsPage />,
      },
      {
        path: '/your-favorite',
        element: <YourFavoritePage />,
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
