import React from 'react';

import facebook from '../Styles/icons/facebook.png';
import instagram from '../Styles/icons/instagram.png';
import youtube from '../Styles/icons/youtube.png';
import tripadvisor from '../Styles/icons/tripadvisor.png';

const RightAside = props => {
    return (
        <div id="secondary_content_wrapper">
            <div id="contact_information_wrapper">
                <h3 className="content_headers">Contact us</h3>
                <ul className="contact_item_list">
                    <li className="contact_item"><a href="tel:+639228674779">+63 922 867 4779 (Sun)</a></li>
                    <li className="contact_item"><a href="tel:+639498271748">+63 949 827 1748 (Smart)</a></li>
                    <li className="contact_item"><a href="tel:+639778344716">+63 977 834 4716 (Globe)</a></li>
                    <li className="contact_item"><a href="tel:+6329386372">+63 2 938 6372 (Manila Landline)</a></li>
                    <li className="contact_item"><a href="tel:+63822841760">+63 82 284 1760 (Davao Landline)</a></li>
                </ul>
                <h3 className="content_headers">Email</h3>
                <ul className="contact_item_list">
                    <li className="contact_item"><i className="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:info@etours.ph?Subject=Inquiry">info@etours.ph</a></li>
                </ul>
            </div>
            <div id="social_media_wrapper">
                <h3 className="content_headers">Social Media</h3>
                <ul className="contact_item_list">
                    <li className="contact_item"><a href="https://www.facebook.com/etours/"><img src={facebook} alt="Etours Facebook"/></a></li>
                    <li className="contact_item"><a href="https://www.instagram.com/etours.ph/"><img src={instagram} alt="Etours Instagram"/></a></li>
                    <li className="contact_item"><a href="https://www.tripadvisor.com.ph/Attraction_Review-g298459-d12290412-Reviews-Etours-Davao_City_Davao_del_Sur_Province_Mindanao.html"><img src={tripadvisor} alt="Etours TripAdvisor"/></a></li>
                    <li className="contact_item"><a href="https://www.youtube.com/channel/UCfxuayB6tOk8u9e2mCK14_Q"><img src={youtube} alt="Etours Youtube"/></a></li>
                </ul>
            </div>
            <div id="accreditation_wrapper">
                <h3 className="content_headers">Accredited by the Department of Tourism</h3>
                <img id="accreditation_img" 
                    src="https://res.cloudinary.com/etours-davao-inc/image/upload/c_scale,w_115/v1487756426/accredribbon_ymgzvq.png" 
                    alt="DOT Accreditation"/>
                <p id="accreditation_no">TOP-R11-00003138-2016</p>
            </div>
            <div id="payment_wrapper">
                <h3 className="content_headers">We accept payments from</h3>
                <div id="payment_partners_images_wrapper">
                    <img className="payment_partner_logo" 
                    src="https://res.cloudinary.com/etours-davao-inc/image/upload/v1511329371/PayPal_edent8.jpg" 
                    alt="payment partner"/>
                    <img className="payment_partner_logo" 
                    src="https://res.cloudinary.com/etours-davao-inc/image/upload/c_scale,h_43,w_123/v1511329371/bdo_su850g.jpg" 
                    alt="payment partner"/>
                    <img className="payment_partner_logo" 
                    src="https://res.cloudinary.com/etours-davao-inc/image/upload/c_scale,w_123/v1511329372/bpi_ipi5i7.jpg" 
                    alt="payment partner"/>  
                </div>                                  
            </div>
            <div id="travel_insurance_wrapper">
                <h3 className="content_headers">Travel insurance partner</h3>
                <img className="insurance_partner_logo" 
                    src="https://res.cloudinary.com/etours-davao-inc/image/upload/c_scale,w_250/v1511329372/pacific_cross_osynkg.png" 
                    alt="insurance partner"/>
            </div>                                                        
        </div>        
    )
}

export default RightAside