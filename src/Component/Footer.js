import { BiLogoFacebook, BiLogoTwitter, BiLogoBehance, BiLogoLinkedin } from "react-icons/bi";
import { FaMapMarkedAlt, FaEnvelopeOpenText, FaPhoneAlt, FaAngleDoubleRight, FaHandPointUp } from "react-icons/fa";

const Footer = () => {
   return (
      <>
         <footer>
            <div className="spacer foot text-white">
               <div className="footer_area">
                  <div className="container">
                     <div className="row">
                        <div className="col-lg-3 col-md-6">
                           <div className="footer_about">
                              <div className="footer_text">
                                 <div className="footer_logo">
                                    <img src={require('../image/logo.png')} alt="" />
                                 </div>
                                 <p>Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus</p>
                                 <div className="footer_icon">
                                    <ul className="d-flex align-items-center p-0">
                                       <li><a href="/"><BiLogoFacebook></BiLogoFacebook></a></li>
                                       <li><a href="/"><BiLogoTwitter></BiLogoTwitter></a></li>
                                       <li><a href="/"><BiLogoBehance></BiLogoBehance></a></li>
                                       <li><a href="/"><BiLogoLinkedin></BiLogoLinkedin></a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                           <div className="footer_about">
                              <h5>Information</h5>
                              <div className="footer_text mt-30">
                                 <div className="footer_item">
                                    <div className="footer_item_icon">
                                       <a href="/"><FaMapMarkedAlt></FaMapMarkedAlt></a>
                                    </div>
                                    <div className="footer_item_text">
                                       <span><a href="https://www.google.com/maps">GXF4+8HQ Chippenham United Kingdom</a></span>
                                    </div>
                                 </div>
                                 <div className="footer_item ">
                                    <div className="footer_item_icon">
                                       <a href="/"><FaEnvelopeOpenText></FaEnvelopeOpenText></a>
                                    </div>
                                    <div className="footer_item_text">
                                       <span><a href="https://www.google.com/maps">info.help@gmail.com</a></span>
                                    </div>
                                 </div>
                                 <div className="footer_item">
                                    <div className="footer_item_icon">
                                       <a href="/"><FaPhoneAlt></FaPhoneAlt></a>
                                    </div>
                                    <div className="footer_item_text">
                                       <span><a href="https://www.google.com/maps">+125 (895) 658 568</a></span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-2 col-md-6 ">
                           <div className="footer_about">
                              <h5>Pages Links</h5>
                              <div className="footer_text page_icon mt-30">
                                 <ul className="p-0">
                                    <li><a href="/"><FaAngleDoubleRight></FaAngleDoubleRight> About us</a></li>
                                    <li><a href="/"><FaAngleDoubleRight></FaAngleDoubleRight> Blog</a></li>
                                    <li><a href="/"><FaAngleDoubleRight></FaAngleDoubleRight> Contact Us</a></li>
                                    <li><a href="/"><FaAngleDoubleRight></FaAngleDoubleRight> Room List</a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-6 ">
                           <div className="footer_about">
                              <h5>Subscribe</h5>
                              <div className="footer_text mt-30">
                                 <div className="footer_input position-relative">
                                    <input type="text" placeholder="Email Address" />
                                    <button><FaHandPointUp></FaHandPointUp></button>
                                 </div>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}

export default Footer;