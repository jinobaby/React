import React, {useState} from 'react'
import './Person.css'
import axios from 'axios'

function Person() {
    var [name, setName] = useState('')
    var [email, setEmail] = useState('')
    var [age, setAge] = useState('')
    var [place, setPlace] = useState('')
    var [loading, setLoading] = useState(false)
    var [findEmail, setFindEmail] = useState('')

    async function uploadData() {
      setLoading(true);
      try{
        var response = await axios.post('https://backendapis-pwow.onrender.com/addPerson', { name, email, age, place })
        console.log("response from uploadData function", response);
        alert("Data uploaded successfully");
        setLoading(false);
        cleanState();
      } catch (error) {
        console.log("error from uploadData function", error);
        setLoading(false);
      }
    }

    async function findPersonByEmail() {
      try{
        var response = await axios.get(`https://backendapis-pwow.onrender.com/getPerson/${findEmail}`)
        console.log(response);
        setName(response.data.name);
        setEmail(response.data.email);
        setAge(response.data.age);
        setPlace(response.data.place);
      } catch (error) {
        console.log("error from findPersonByEmail function", error);
      }
    }

    async function updatePersonByEmail() {
      try {
          var response = await axios.put(`https://backendapis-pwow.onrender.com/updatePerson/${findEmail}`, { name, email, age, place })
          console.log(response);
          alert(response.data.message);
          cleanState();
      } catch (error) {
        console.log("error from updatePersonByEmail function", error);
      }
    }

    async function deletePerson() {
      try {
          var response = await axios.delete(`https://backendapis-pwow.onrender.com/deletePerson/${findEmail}`)
          console.log(response);
          alert(response.data.message);
          cleanState();
      } catch (error) {
        console.log("error from deletePerson function", error);
      }
    }

    function cleanState() {
      setName('');
      setEmail('');
      setAge('');
      setPlace('');
      setFindEmail('');
    }
  return (
    <div>
        <section className='main-section-form'> 
          {
            loading ? <div>Loading?</div> :
            <div className='form-main'>
                <label className='form-label' htmlFor="name">name</label>
                <input className='form-input' 
                  type="text" 
                  placeholder='Enter name'
                  onChange={(e) => { setName(e.target.value)}}
                  value={name} />
                
                <label className='form-label ' htmlFor="email">email</label>
                <input className='form-input' 
                  type="email" 
                  placeholder='Enter email' 
                  onChange={(e) => { setEmail(e.target.value)}}
                  value={email} />
                
                <label className='form-label' htmlFor="age">Age</label>
                <input className='form-input' 
                  type="number" 
                  placeholder='Enter age' 
                  onChange={(e) => { setAge(e.target.value)}}
                  value={age} />
                
                <label className='form-label' htmlFor="place">Place</label>
                <input className='form-input' 
                  type="text" 
                  placeholder='Enter place' 
                  onChange={(e) => { setPlace(e.target.value)}}
                  value={place} />
                {
                  findEmail 
                  ? <button className='form-button' onClick={updatePersonByEmail}>Update</button>
                  : <button className='form-button' onClick={uploadData}>Submit</button>
                }
                {findEmail && (
                  <button className='form-button' onClick={deletePerson} style={{marginLeft: '10px', background: 'red', color: 'white'}}>Delete</button>
                )}
            </div>
          }
          
          <div>
            <h1>Find Person By Email</h1>
            <input className='form-input' 
              type="email" 
              placeholder='Enter email'
              onChange={(e) => { setFindEmail(e.target.value)}}
              value={findEmail}
            />
            <button onClick={findPersonByEmail} className='form-button'>Find</button>
          </div>
        </section>
    </div>
  )
}

export default Person