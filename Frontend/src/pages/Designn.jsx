import React from 'react'
import './Design.css'
import { FaAngleDown, FaGlobe } from "react-icons/fa";

function Designn() {
  return (
    <div className='main-container' style={{display: 'flex', flexDirection: 'column'}}>
        {/* main Nav Bar */}
        <nav className='uber-nav-main'>
            <section className='uber-nav-inner' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className='ubernav-left' style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{
                        fontSize: '24px',
                        fontWeight: 'bold', 
                        color: 'white', 
                        flex: 1,
                        fontFamily: 'sans-serif',
                        marginRight: '40px'
                    }}>Uber</div>
                    
                    <div className='selection-left' style={{display: 'flex', alignItems: 'center', gap: '32px'}}>
                        <div className='link-left' style={{
                            fontSize: '18px',
                            fontWeight: 'bold', 
                            color: 'white', 
                            fontFamily: 'sans-serif'
                        }}>Ride</div>
                        <div className='link-left' style={{
                            fontSize: '18px',
                            fontWeight: 'bold', 
                            color: 'white', 
                            fontFamily: 'sans-serif'
                        }}>Drive</div>
                        <div className='link-left' style={{
                            fontSize: '18px',
                            fontWeight: 'bold', 
                            color: 'white', 
                            fontFamily: 'sans-serif'
                        }}>Business</div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '18px', fontWeight: 'bold', color: 'white', fontFamily: 'sans-serif', cursor: 'pointer'}}>
                            About <FaAngleDown style={{marginTop: '3px'}}/>
                        </div>
                    </div>
                </div>

                <div className='ubernav-right' style={{display: 'flex', alignItems: 'center', gap: '28px'}}>
                    <div style={{display: 'flex', alignItems: 'center', color: 'white', fontSize: '18px', fontFamily: 'sans-serif', gap: '6px', cursor: 'pointer'}}>
                        <FaGlobe /> EN
                    </div>
                    <div style={{color: 'white', fontSize: '18px', fontFamily: 'sans-serif', cursor: 'pointer'}}>Help</div>
                    <div style={{color: 'white', fontSize: '18px', fontFamily: 'sans-serif', cursor: 'pointer'}}>Log in</div>
                    <button style={{
                        background: 'white',
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        border: 'none',
                        borderRadius: '24px',
                        padding: '8px 24px',
                        cursor: 'pointer'
                    }}>Sign up</button>
                </div>
            </section>
        </nav>
        {/* Hero Section */}
        <section className='nav-sec-section'>
            <div className='sec-left'>
                <h1>Ride</h1>
            </div>
            <div className='sec-right'>
                <p className='sec-right-li'>Request a ride</p>
                <p className='sec-right-li'>Reserve a ride</p>
                <p className='sec-right-li'>See Prices</p>
                <p className='sec-right-li'>Explore ride options</p>
                <p className='sec-right-li'>Airport rides</p>
            </div>
        </section>
    </div>
  )
}

export default Designn