import React from 'react';
import { Link } from '@reach/router'

import './css/footer.css'

export default (props) => {
  return (
    <footer className="footer-basic">
        <div className="social">
            <a href="#"><i className="fab fa-instagram fa-2x" style={{color: '#ED4C67'}}></i></a>
            <a href="#"><i className="fab fa-linkedin fa-2x" style={{color: '#0652DD'}}></i></a>
            <a href="#"><i className="fab fa-facebook fa-2x" style={{color: '#0652DD'}}></i></a>
        </div>
        <ul className="list-inline">
            <li className="list-inline-item"><Link to="/">Home</Link></li>
            {/* <li className="list-inline-item"><Link to="/">Services</Link></li> */}
            <li className="list-inline-item"><Link to={'/philippine-tours-2019-2020/davao-tourpackages'}>Davao Tourpackages</Link></li>
            <li className="list-inline-item"><Link to={'/about-us'}>Company Profile</Link></li>
            <li className="list-inline-item"><Link to={'/privacy-policy'}>Privacy Policy</Link></li>
            <li className="list-inline-item"><Link to={'/contact-us'}>Contact us</Link></li>
        </ul>
        <p className="copyright">Etours Davao Inc © 2019</p>
    </footer>
  )
};