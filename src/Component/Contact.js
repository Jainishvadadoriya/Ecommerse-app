import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUserAlt, FaFacebookF, FaTwitter, FaBehanceSquare, FaLinkedinIn } from "react-icons/fa";

import { FaArrowRightLong } from "react-icons/fa6";
const contact = () => {
   return (
      <>
         <div className="about_banner banner_after">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="about_title text-center">
                        <h1>Contact Us</h1>
                        <div className="banner_menu">
                           <ul className="d-flex justify-content-center">
                              <li><Link to="/">Home</Link></li>
                              <li><span>-</span>Contact Us</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* contact form */}
         <div className="spacer">
            <div className="container">
               <div className="row">
                  <div className="col-lg-5">
                     <div className="contact_title">
                        <h3 class="mb-25">Get In Touch</h3>
                        <p>Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus felis. Nulla non pulvinar enim, vel viverra nunc</p>
                     </div>
                     <div className="contact_info mt-30">
                        <div className="contact_info_item d-flex mb-25 align-items-center">
                           <div className="contact_info_icon">
                              <FaPhoneAlt></FaPhoneAlt>
                           </div>
                           <div className="contact_info_txt">
                              <span>Emergency Help</span>
                              <h6>+123 ( 458 ) 896 895</h6>
                           </div>
                        </div>
                        <div className="contact_info_item d-flex mb-25 align-items-center">
                           <div className="contact_info_icon">
                              <FaEnvelope></FaEnvelope>
                           </div>
                           <div className="contact_info_txt">
                              <span>Quick Email</span>
                              <h6>support@gamil.com</h6>
                           </div>
                        </div>
                        <div className="contact_info_item d-flex mb-25 align-items-center">
                           <div className="contact_info_icon">
                              <FaMapMarkerAlt></FaMapMarkerAlt>
                           </div>
                           <div className="contact_info_txt">
                              <span>Office Address</span>
                              <h6>GXF4+8HQ Chippenham United Kingdom</h6>
                           </div>
                        </div>
                        <div className="contact_social">
                           <ul className="d-flex align-items-center ">
                              <li><Link><FaFacebookF></FaFacebookF></Link></li>
                              <li><Link><FaTwitter></FaTwitter></Link></li>
                              <li><Link><FaLinkedinIn></FaLinkedinIn></Link></li>
                              <li><Link><FaBehanceSquare></FaBehanceSquare></Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-7">
                     <div className="contact_form">
                        <h3 class="mb-35">Send Massage</h3>
                        <form action="#">
                           <div className="row">
                              <div className="col-sm-6 mb-30">
                                 <div className="name position-relative">
                                    <FaUserAlt></FaUserAlt>
                                    <input type="text" placeholder="Full Name" required="" name="name"></input>
                                 </div>
                              </div>
                              <div className="col-sm-6 mb-30">
                                 <div className="name position-relative">
                                    <FaUserAlt></FaUserAlt>
                                    <input type="text" placeholder="Full Name" required="" name="name"></input>
                                 </div>
                              </div>
                              <div className="col-sm-6 mb-30">
                                 <div className="name position-relative">
                                    <FaUserAlt></FaUserAlt>
                                    <input type="text" placeholder="Full Name" required="" name="name"></input>
                                 </div>
                              </div>
                              <div className="col-sm-6 mb-30">
                                 <div className="name position-relative">
                                    <FaUserAlt></FaUserAlt>
                                    <input type="text" placeholder="Full Name" required="" name="name"></input>
                                 </div>
                              </div>
                              <div className="col-sm-12 mb-30">
                                 <div className="name position-relative">
                                    <FaUserAlt></FaUserAlt>
                                    <textarea name="message" placeholder="Type your comments...."></textarea>
                                 </div>
                              </div>
                              <div className="col-lg-12">
                                 <div className="form_btn">
                                    <button className="home_btn" type="submit">Submit Now<FaArrowRightLong></FaArrowRightLong></button>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* iframe */}

         <div className="spacer">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="contact_iframe">
                        <iframe title="myframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.6728863369!2d72.65748062757552!3d21.159440568022415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1697513901993!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default contact;