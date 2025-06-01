import React from 'react'
import './App.css'
import Green from './pages/green.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Service from './pages/service.jsx'
import ClassComponent from './pages/ClassComponent.jsx'
import ClassLifeCycle from './pages/classLifeCycle.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Query from './pages/Query.jsx'
import StateHook from './pages/stateHook.jsx'
import BallState from './pages/BallState.jsx'
import Reduceer from './pages/Reduceer.jsx'
import Effect from './pages/Effect.jsx'
import ReducerBall from './pages/ReducerBall.jsx'
import Context from './pages/Context.jsx'
import IfElse from './pages/IfElse.jsx'
import And from './pages/And.jsx'
import ArrayData from './pages/ArrayData.jsx'
import GetApi from './pages/GetApi.jsx'
import StudyRedux from './pages/StudyRedux.jsx'
import GetApiImages from './pages/GetApiImages.jsx'


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
    },
    {
      element: <Query/>,
      path: '/Query'
    },
    {
      element: <StateHook/>,
      path: '/stateHook'
    },
    {
      element: <BallState/>,
      path: '/BallState'
    },{
      element: <Reduceer/>,
      path: '/Reducer'
    },
    {
      element: <Effect/>,
      path: '/Effect'
    },
    {
      element: <ReducerBall/>,
      path: '/ReducerBall'  
    },
    {
      element: <Context/>,
      path: '/Context'
    }, 
    {
      element: <IfElse/>,
      path: '/IfElse'
    },
    {
      element: <And/>,
      path: '/And'
    },
    {
      element: <ArrayData/>,
      path: '/ArrayData'
    },
    {
      element: <GetApi/>,
      path: '/GetApi'
    },
    {
      element: <StudyRedux/>,
      path: '/StudyRedux'
    },
    {
      element: <GetApiImages/>,
      path: '/GetApiImages'
    }
  ])

  return (
    <>
    
    <RouterProvider router={app} />

    </>
  )
}

export default App