import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Pages/Root'
import Dashboard from './Pages/Dashboard'
import Signup from './Pages/Signup'
import SignIn from './Pages/SignIn'
import Add from './Pages/Add'
import Edit from './Pages/Edit'
import Products from './Pages/Products'

  const router =createBrowserRouter(
    [
    {
      path:'/',
      element:<Root></Root>,
      children:[
        {
        path:'',
        element:<Signup></Signup>,
        },
        {
          path:'signin',
          element:<SignIn></SignIn>,
        },
        {
          path:'dashboard',
          element:<Dashboard></Dashboard>,
          children:[
          {
            path:'',
            element:<Products></Products>,
          },{
            path:'add',
            element:<Add></Add>,
          },
          {
            path:'edit/:id',
            element:<Edit></Edit>,
          },
          ]
        },
        
      ]
    }
  ]
  )
  


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
