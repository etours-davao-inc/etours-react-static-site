import React from 'react';

export default (props) => {
  return (
    <div className="responsive-widths my-2 bg-white p-2">
      <h1 className="h2 chilean-fire d-none">Etours Company Profile</h1>
      <div className="text-center p-5">
      <h2 className="h1 chilean-fire">Vision</h2>
      <p className="font-weight-light">To be the preferred trip organiser for group travel.</p>
      <h2 className="h1 chilean-fire">Mission</h2>
      <p className="font-weight-light">To be known as an organisation known to be reliable, responsive to the needs of the customer, and conduct their activities professionally.</p>
    </div>
      <div className="embed-responsive embed-responsive-21by9 rounded mb-2"
      style={{
        backgroundImage:'url("https://res.cloudinary.com/etours-davao-inc/image/upload/ar_16:9,w_900/v1549429417/Etours-davao-tours-philippines.jpg")', backgroundRepeat:'no-repeat', 
        backgroundSize:'cover'}}>
    </div>
      <div className="w-75 mx-auto">
      <h2 className="h1 mt-5 chilean-fire text-center">Values</h2>
      <p><strong>Reliable</strong> - We understand that you want an organisation you can trust your business with and we strive to be the organisation you can rely on. We guarantee that we are transparent with our dealings with you and we have your best interest in mind.</p>
      <p><strong>Responsive </strong> - We understand that you are busy - that is why we put in the effort to respond to your needs in a timely manner and as efficiently as possible.</p>
      <p><strong>Professional&nbsp;</strong>-We understand that you want to be treated as a valued customer and we make sure that you get the treatment of a valued customer.</p>
    </div>  
      <img src="http://res.cloudinary.com/etours-davao-inc/image/upload/c_mfit,e_art:ukulele,g_center,q_100,w_720/v1549428954/etours-davao-production-team-2016.jpg" alt="Etours production team on a break during hassle free shoot " width={720} height={540} className="d-block mx-auto mb-5 rounded img-fluid"/>
      <h2 className="h4 chilean-fire">About Etours</h2>
      <p>Etours was founded in 2009 as an educational tour organiser for schools - we think that educational tours and supplemental activities like seminars, bootcamps, workshops complements lessons taught inside the classroom.</p>
      <p>Etours was founded in 2009 as an educational tour organiser for schools - we think that educational tours and supplemental activities like seminars, bootcamps, workshops complements lessons taught inside the classroom.</p>
      <p>Following our success in organising educational tours, we expanded our services by organising trips for Corporate Customers, Government Offices, and Local Government Units for their team building activities, meetings, seminars, incentive travels, social activities, and benchmarking.</p>
      <p>We are also a recipient of tour bookings from delegations of Meetings, Conventions, and Expositions held in Davao City.</p>
      <p>Through the years we invested on our online portal to cater to the needs of smaller groups and independent travellers.</p>             
    </div>
  )
}