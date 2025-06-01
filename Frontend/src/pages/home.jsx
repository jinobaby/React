import React from 'react'
import Navbar from './Navbar.jsx'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveData } from '../Redux/Slice.js'


function Home() {
  var dispatch = useDispatch();
  var data = useSelector((state) => state.userData.data)
  console.log(data);
  
  function deleteData() {
    dispatch(RemoveData())
  }

  return (
    <div>

      <Navbar />

      <h1>Home Page</h1>
      <button onClick={deleteData}>delete data</button>


    </div>
  )
}

export default Home