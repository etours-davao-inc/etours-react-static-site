import React from 'react';
import { Link } from '@reach/router'

import './css/nav.css'

const Header = props => {
    return (
        <nav className="navbar sticky-top bg-white shadow">
            <div className="d-flex justify-content-between align-items-center w-100">
                <div>
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"><i className="fas fa-bars"></i></a>
                <div className="dropdown-menu align-right w-100">
                    {/* <Link className="dropdown-item border-bottom" to="/">Services</Link> */}
                    <Link className="dropdown-item border-bottom" to={'/philippine-tours-2019-2020/davao-tourpackages'}>Davao Tourpackages</Link>
                    <Link className="dropdown-item border-bottom" to={'/about-us'}>Company Profile</Link>
                    <Link className="dropdown-item border-bottom" to={'/contact-us'}>Contact Us</Link>
                    <Link className="dropdown-item" to={'/privacy-policy'}>Privacy Policy</Link>
                </div>
                </div>
                <Link to="/">
                <img id="etours-logo" className="center-block" src="https://res.cloudinary.com/etours-davao-inc/image/upload/c_scale,w_125/v1478855681/EtoursLogo_t2euyl.png" />
                </Link>
                <div>
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"><i className="fas fa-phone"></i></a>
                <div className="dropdown-menu align-right w-100">
                    <div className="w99n75">
                    <div className="text-center">
                        <div className="social mt-2">
                        <span href="#"><i className="fas fa-phone-square fa-2x p-1" style={{color:'#0be881'}}></i></span>
                        <span href="#"><i className="fab fa-viber fa-2x p-1" style={{color: '#8e44ad'}}></i></span>
                        <span href="#"><i className="fab fa-whatsapp fa-2x p-1" style={{color: '#27ae60'}}></i></span>
                        </div>
                        <p className="mb-0">+63 (977) 834 4716 (Globe)</p>
                        <i className="fab fa-facebook fa-2x" style={{color: '#0652DD'}}></i>
                        <p>www.facebook.com/etours</p>
                        <i className="fab fa-instagram fa-2x" style={{color: '#ED4C67'}}></i>
                        <p>www.instagram.com/etours.ph</p>
                        <i className="fab fa-linkedin fa-2x" style={{color: '#0652DD'}}></i>
                        <p>ph.linkedin/in/etours-davao</p>
                        <img className="d-block mx-auto" src="https://res.cloudinary.com/etours-davao-inc/image/upload/w_30/v1549434882/etours-logo.png" />
                        <p>info@etours.ph</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>  
        </nav>
    )
}

export default Header;