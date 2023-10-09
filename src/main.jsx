import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/MainLayout/Root.jsx'
import Home from './Components/pages/Home.jsx'
import Login from './Components/pages/Login'
import Register from './Components/pages/Register'
import ServiceDetails from './Components/pages/ServiceDetails'
import PotectedRoute from './Components/Others/PotectedRoute'
import Profile from './Components/pages/Profile.jsx'
import AuthProvider from './Components/provider/AuthProvider'
import About from './Components/pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/event.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/serviceDetails/:id',
        element: <PotectedRoute>
          <ServiceDetails></ServiceDetails>

        </PotectedRoute>,
        loader: () => fetch('/event.json')
      },
      {
        path: '/profile',
        element: <PotectedRoute>
          <Profile></Profile>
        </PotectedRoute>
      },
      {
        path:'/about',
        element:<About></About>
      }

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
