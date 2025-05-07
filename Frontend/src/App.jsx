import React from 'react'
import './App.css'
import Green from './pages/green.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Service from './pages/service.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'



function App() {

  var app = createBrowserRouter([
    {
      element: <Home/>,
      path: '/Home'
    }, 
    {
      element: <About/>,
      path: '/About'  
    }, 
    {
    element: <Service/>,
    path: '/Service'
    }
  ])

  return (
    <>
    
    <RouterProvider router={app} />

    </>
  )
}

export default App