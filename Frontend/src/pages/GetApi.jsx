import React, { useEffect, useState } from 'react'
import axios from 'axios'

function GetApi() {
    const [data, setData] = useState([])

  useEffect(() => {
    getData();
  },[] )

  async function getData() {
    var response = await axios.get('https://jsonplaceholder.typicode.com/photos')
    setData(response.data);
    console.log(response.data[0]);
  }

  return (
    <div>
        <h1>Get API Calls</h1>
        
        <br />


        {
            data.map((item, index) => (
                <div key={item.id}>
                    <h1>{index}:{ item.title }</h1>
                    <h1>{ item.body }</h1>
                </div>
            ))
        }
    </div>
  )
}

export default GetApi