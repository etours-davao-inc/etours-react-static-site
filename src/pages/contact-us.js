import React from 'react';

export default (props) => {
  return (
    <div className="responsive-widths bg-white my-2 p-2">
      <div className="text-center">
        <i className="fas fa-phone-square fa-3x mt-2" style={{color: '#0be881'}}></i>
        <p className="mb-0">+63 (02) 938 6372 (Manila)</p>
        <p>+63 (082) 284-1760 (Davao)</p>
        <div className="social mt-2">
          <span href="#"><i className="fab fa-viber fa-3x" style={{color: '#8e44ad'}}></i></span>
          <span href="#"><i className="fab fa-whatsapp fa-3x" style={{color: '#27ae60'}}></i></span>
        </div>
        <p className="mb-0">+63 (977) 834 4716 (Globe)</p>
        <p>+63 (922) 867 4779 (Sun)</p>
        <i className="fab fa-facebook fa-3x mt-2" style={{color: '#0652DD'}}></i>
        <p>www.facebook.com/etours</p>
        <i className="fab fa-instagram fa-3x mt-2" style={{color: '#ED4C67'}}></i>
        <p>www.instagram.com/etours.ph</p>
        <i className="fab fa-linkedin fa-3x mt-2" style={{color: '#0652DD'}}></i>
        <p>ph.linkedin/in/etours-davao</p>
        <img className="d-block mx-auto" src="http://res.cloudinary.com/etours-davao-inc/image/upload/v1549434882/etours-logo.png" />
        <p className="h3">www.etours.ph</p>
        <p>info@etours.ph</p>
      </div>
    </div>    
  )
}