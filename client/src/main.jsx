import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './output.css'

import App from './App.jsx';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import ResultPage from './pages/ResultPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
            path: '/result',
            element: <ResultPage />
          }
      ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)