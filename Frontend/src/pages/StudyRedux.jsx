//call thsi whereever we need data to be loaded
//useSelector is used to get the data from the redux store
//it takes a function as an argument which returns the data we need
//here we are getting the data from the userData slice and accessing the data property

//i can use this line in any component to get the data from the redux store

import React from 'react'
import { AddData, RemoveData } from '../Redux/Slice';
import { useDispatch, useSelector } from 'react-redux';

function StudyRedux() {

  var dispatch = useDispatch();

  function AddData() {
    dispatch(AddData("Samu Wlecome to Redux"));
  }


  var data = useSelector((state) => state.userData.data[0])
  console.log(data);

  return (
    <div>
      <h1>Study Redux</h1>
      <button onClick={AddData}>Click to add data</button>
      <button>get data from redux</button>

    </div>
  )
}

export default StudyRedux