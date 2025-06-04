import React from 'react'
import './Design.css'
import { FaAngleDown, FaTag, FaGlobe, FaLocationArrow, FaCircle } from "react-icons/fa";

function Designn() {
    const suggestions = [
        {
            title: "Intercity",
            desc: "Get convenient, affordable outstation cabs anytime at your door.",
            img: "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_200,h_100/v1629398582/assets/2e/2e7e3b7d-2e6c-4e2e-8e7e-3b7d2e6c4e2e/original/intercity.png"
        },
        {
            title: "City Rides",
            desc: "Book rides within your city quickly and easily.",
            img: "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_200,h_100/v1629398582/assets/2e/2e7e3b7d-2e6c-4e2e-8e7e-3b7d2e6c4e2e/original/intercity.png"
        },
        {
            title: "Airport",
            desc: "Hassle-free airport pickups and drop-offs.",
            img: "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_200,h_100/v1629398582/assets/2e/2e7e3b7d-2e6c-4e2e-8e7e-3b7d2e6c4e2e/original/intercity.png"
        },
        {
            title: "Rentals",
            desc: "Hourly rentals for flexible travel plans.",
            img: "https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_200,h_100/v1629398582/assets/2e/2e7e3b7d-2e6c-4e2e-8e7e-3b7d2e6c4e2e/original/intercity.png"
        }
    ];
    return (
        <div className='main-container' style={{ display: 'flex', flexDirection: 'column' }}>

            {/* main Nav Bar */}
            <nav className='uber-nav-main'>
                <section className='uber-nav-inner' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className='ubernav-left' style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: 'white',
                            flex: 1,
                            fontFamily: 'sans-serif',
                            marginRight: '40px'
                        }}>Uber</div>

                        <div className='selection-left' style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
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
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '18px', fontWeight: 'bold', color: 'white', fontFamily: 'sans-serif', cursor: 'pointer' }}>
                                About <FaAngleDown style={{ marginTop: '3px' }} />
                            </div>
                        </div>
                    </div>

                    <div className='ubernav-right' style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '18px', fontFamily: 'sans-serif', gap: '6px', cursor: 'pointer' }}>
                            <FaGlobe /> EN
                        </div>
                        <div style={{ color: 'white', fontSize: '18px', fontFamily: 'sans-serif', cursor: 'pointer' }}>Help</div>
                        <div style={{ color: 'white', fontSize: '18px', fontFamily: 'sans-serif', cursor: 'pointer' }}>Log in</div>
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
            <section className='req-section'>
                <div className='req-left'>
                    <h1 className='req-title'>Request a ride for<br />now or later</h1>
                    <div className='promo'>
                        <FaTag style={{ color: 'green', marginRight: 8 }} />
                        <span>
                            <b>Up to 50% off your first 5 Uber rides.</b> T&Cs apply.<br />
                            <span className='promo-sub'>*Valid within 15 days of signup.</span>
                        </span>
                    </div>
                    <div className='req-form'>
                        <div className='input-group'>
                            <FaCircle className='input-icon' />
                            <input className='req-input' placeholder='Enter location' />
                            <FaLocationArrow className='input-arrow' />
                        </div>
                        <div className='input-group'>
                            <FaCircle className='input-icon' />
                            <input className='req-input' placeholder='Enter destination' />
                        </div>
                        <div className='req-btns'>
                            <button className='see-prices'>See prices</button>
                            <button className='schedule-later'>Schedule for later</button>
                        </div>
                    </div>
                </div>
                <div className='req-right'>
                    <img
                        style={{ height: '100%', width: '100%', borderRadius: '38px', objectFit: 'cover' }}
                        src="https://www.uber-assets.com/image/upload/v1684852612/assets/ba/4947c1-b862-400e-9f00-668f4926a4a2/original/Ride-with-Uber.png"
                        alt=""
                    />
                </div>
            </section>

            {/* suggestion */}
            <div className="suggestion-sec">
                <div className="suggestion-title">Suggestions</div>
                <div className="suggestion-cards-main">
                    {suggestions.map((s, i) => (
                        <div className="suggestion-card" key={i}>
                            <div className="suggestion-card-content">
                                <div className="suggestion-card-title">{s.title}</div>
                                <div className="suggestion-card-desc">{s.desc}</div>
                                <button className="suggestion-card-btn">Details</button>
                            </div>
                            <img className="suggestion-card-img" src={s.img} alt={s.title} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Plan for later section */}
            <section className="plan-later-section" style={{ width: '100%', display: 'flex', justifyContent: 'center', background: '#fff', marginTop: '40px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', width: '85%', background: '#fff', borderRadius: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '40px 0', gap: '40px', alignItems: 'center' }}>
                    {/* Left: Card */}
                    <div style={{ background: '#bfe0e7', borderRadius: '18px', padding: '40px', flex: 1, minWidth: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                        <div style={{ fontSize: '32px', fontWeight: 900, fontFamily: 'sans-serif', marginBottom: '18px' }}>
                            Get your ride right<br />with Uber Reserve
                        </div>
                        <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '18px', color: '#222' }}>
                            Choose date and time
                        </div>
                        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                            <input type="date" style={{
                                padding: '12px',
                                borderRadius: '8px',
                                border: 'none',
                                fontSize: '16px',
                                width: '140px',
                                background: '#fff'
                            }} />
                            <input type="time" style={{
                                padding: '12px',
                                borderRadius: '8px',
                                border: 'none',
                                fontSize: '16px',
                                width: '110px',
                                background: '#fff'
                            }} />
                        </div>
                        <button style={{
                            background: '#000',
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: '18px',
                            border: 'none',
                            borderRadius: '10px',
                            padding: '12px 0',
                            width: '100%',
                            cursor: 'pointer'
                        }}>Next</button>
                        <img
                            src="https://cdn.pixabay.com/photo/2012/04/13/00/22/watch-31201_1280.png"
                            alt="Watch"
                            style={{
                                position: 'absolute',
                                right: '-40px',
                                bottom: '-30px',
                                width: '140px',
                                height: 'auto',
                                objectFit: 'contain',
                                pointerEvents: 'none'
                            }}
                        />
                    </div>
                    {/* Right: Benefits */}
                    <div style={{ flex: 1, minWidth: '300px', paddingLeft: '20px' }}>
                        <div style={{ fontWeight: 700, fontSize: '20px', fontFamily: 'sans-serif', marginBottom: '18px' }}>Benefits</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '16px', color: '#222', fontFamily: 'sans-serif' }}>
                            <li style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span role="img" aria-label="calendar">📅</span>
                                Choose your exact pickup time up to 90 days in advance.
                            </li>
                            <li style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span role="img" aria-label="clock">⏰</span>
                                Extra wait time included to meet your ride.
                            </li>
                            <li style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span role="img" aria-label="cancel">🗂️</span>
                                Cancel at no charge up to 60 minutes in advance.
                            </li>
                        </ul>
                        <div style={{ color: '#888', fontSize: '15px', marginTop: '16px', cursor: 'pointer', textDecoration: 'underline' }}>See terms</div>
                    </div>
                </div>
            </section>


            export default SuggestionSection;
        </div>
    )
}

export default Designn