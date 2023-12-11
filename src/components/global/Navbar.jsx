import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFontAwesome, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const handleMenuToggle = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    };
    const handleMenuClose = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    };

    return (
        <>
            <div className="sub-header">
                <div className="container">
                    <div className="row flex justify-between">
                        <div className="col-lg-8 col-md-8">
                            <ul className="info">
                                <li><i><FontAwesomeIcon icon={faEnvelope} /></i> info@company.com</li>
                                <li><i><FontAwesomeIcon icon={faMap} /></i> Sunny Isles Beach, FL 33160</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <ul className="social-links">
                                <li><Link to="#"><i><FontAwesomeIcon icon={faFacebook} /></i></Link></li>
                                <li><Link to="https://x.com/minthu" target="_blank"><i><FontAwesomeIcon icon={faTwitter} /></i></Link></li>
                                <li><Link to="#"><i><FontAwesomeIcon icon={faLinkedin} /></i></Link></li>
                                <li><Link to="#"><i><FontAwesomeIcon icon={faInstagram} /></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <nav className='header-area sticky'>
                <ul className='sidebar'>
                    <li onClick={handleMenuClose}><Link to="#"><i><FontAwesomeIcon icon={faClose} /></i></Link></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/properties">Properties</NavLink></li>
                    <li><NavLink to="/property-detail">Property Details</NavLink></li>
                    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                </ul>
                <ul>
                    <li><Link to="/" className="logo">
                        <h1>Elysian</h1>
                    </Link></li>
                    <li className='hide-on-mobile'><NavLink to="/">Home</NavLink></li>
                    <li className='hide-on-mobile'><NavLink to="/properties">Properties</NavLink></li>
                    <li className='hide-on-mobile'><NavLink to="/property-detail">Property Details</NavLink></li>
                    <li className='hide-on-mobile'><NavLink to="/contact-us">Contact Us</NavLink></li>
                    <li className='hide-on-mobile schedule-visit'><Link to="#"><i><FontAwesomeIcon icon={faCalendar} /></i>Schedule a visit</Link></li>
                    <li className='menu-button' onClick={handleMenuToggle}><Link to="#"><i><FontAwesomeIcon icon={faInstagram} /></i></Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
