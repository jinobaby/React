import React from 'react'
import './green.css'
import Navbar from './Navbar.jsx'
import { MdPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

function green() {
  return (
    <>
      
      <section className='green-main'>
        <div className='green-inner'>
          <div className='left-main-header'>
            
            <MdPhone  style={
              {fontSize:"15px", color: 'white'}  
            }/>
            <p>+12268995073</p>
            
            <div className='divider-line'>|</div>
            <IoMdMail style={
              {fontSize:"15px", color: 'white'}
            }/>
            <p>customer@greenco@ltd</p>
          
          </div>
          
          <div className='right-main-header'>
            
            <p>Certificates</p>
            
            <div className='divider-line'>|</div>

            <p>Why us</p>

            <div className='divider-line'>|</div>

            <p>Newsroom</p>

            <div className='divider-line'>|</div>

            <p>Sell-With-Us</p>

            <div className='divider-line'>|</div>

            <label htmlFor="place">India,</label>
            <select name="Cities">
            <option value="Kochi">Kochi</option>
            <option value="Kannur">Kannur</option>
            <option value="Thrivandrum">Thrivandrum</option>
            </select>

          </div>
        </div>
      </section>

    </>
  )
}

export default green