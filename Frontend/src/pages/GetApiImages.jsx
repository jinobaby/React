import React, { useEffect, useState } from 'react'
import axios from 'axios'

function GetApiImages() {
    const [getData, setGetData] = useState([])

    useEffect(() => {
        getapiimages();
    }, [])

    async function getapiimages()  {
        var response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        console.log(response.data[1]);
        setGetData(response.data)
    } 

    return (
        <div>
          <h1>GetApiImages</h1>
        
          {
                getData.map((item) => (
                    <div key={item.id}>
                        {/* <h1>{item.title}</h1> */}
                        <img 
                        style={{
                            height: '200px',
                            width: '200px',
                            backgroundColor: 'red',
                        }} 
                        src={item.url} 
                        alt={item.title} 
                        onError={(e) => e.target.src = 'https://via.placeholder.com/200'}/>
                    </div>
                ))
          } 
        </div>
    )
}

export default GetApiImages