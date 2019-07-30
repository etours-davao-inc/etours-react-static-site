import React from 'react';

export default (props) => {
  if (typeof window !== 'undefined') {
    window.scrollTo(0,0)
  }
  return (
    <div className="responsive-widths bg-white my-2 p-2">
      <div className="text-center">
        <div className="social mt-2">
          <span href="#"><i className="fas fa-phone-square fa-3x p-1" style={{color: '#0be881'}}></i></span>
          <span href="#"><i className="fab fa-viber fa-3x p-1" style={{color: '#8e44ad'}}></i></span>
          <span href="#"><i className="fab fa-whatsapp fa-3x p-1" style={{color: '#27ae60'}}></i></span>
        </div>
        <p className="mb-0">+63 (977) 834 4716 (Globe)</p>
        <i className="fab fa-facebook fa-3x mt-2" style={{color: '#0652DD'}}></i>
        <p>www.facebook.com/etours</p>
        <i className="fab fa-instagram fa-3x mt-2" style={{color: '#ED4C67'}}></i>
        <p>www.instagram.com/etours.ph</p>
        <i className="fab fa-linkedin fa-3x mt-2" style={{color: '#0652DD'}}></i>
        <p>ph.linkedin/in/etours-davao</p>
        <img className="d-block mx-auto" src="https://res.cloudinary.com/etours-davao-inc/image/upload/v1549434882/etours-logo.png" />
        <p className="h3">www.etours.ph</p>
        <p>info@etours.ph</p>
      </div>
    </div>    
  )
}