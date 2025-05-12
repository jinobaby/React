import React from 'react'
import './App.css'
import Green from './pages/green.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Service from './pages/service.jsx'
import ClassComponent from './pages/ClassComponent.jsx'
import ClassLifeCycle from './pages/classLifeCycle.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'



function App() {

  var app = createBrowserRouter([
    {
      element: <Home/>,
      path: '/'
    }, 
    {
      element: <About/>,
      path: '/About'  
    }, 
    {
    element: <Service/>,
    path: '/Service'
    }, 
    {
    element: <ClassComponent/>,
    path: '/ClassComponent'
    }, 
    {
    element: <ClassLifeCycle/>,
    path: '/classLifeCycle'
    }
  ])

  return (
    <>
    
    <RouterProvider router={app} />

    </>
  )
}

export default App