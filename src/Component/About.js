import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter , FaBehanceSquare,FaLinkedinIn } from "react-icons/fa";

const About = () => {
   return (
      <>
         {/* about banner start */}
         <div className="about_banner banner_after">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="about_title text-center">
                        <h1>About Us</h1>
                        <div className="banner_menu">
                           <ul className="d-flex justify-content-center">
                              <li><Link to="/">Home</Link></li>
                              <li><span>-</span>About Us</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* offer start */}

         <div className="spacer">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="offer_title">
                        <span class="sub_title">Company Offers</span>
                        <h2>Book now and save up to 35% On hotel rooms</h2>
                        <p>hasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus felis. Nulla non pulvinar enim, vel viverra nunc. Integer condimentum vulputate justo. Morbi rhoncus elit in tellus viverra, vel fermentum orci dictum. Vestibulum non nisi commodo, tincidunt elit non, consectetur tellus. Fusce in commodo velit. In dapibus dui vitae tortor ullamcorper mollis.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">
                     <div className="offer_area_img">
                        <img src={require('../image/offer_img.jpeg')} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* service start */}
         <div className="about_service">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                     <div className="about_service_item">
                        <span>01</span>
                        <div className="about_s_img">
                           <img src={require('../image/about_s1.png')} alt="" />
                        </div>
                        <div className="about_service_txt">
                           <h4>Room Cleaning</h4>
                           <p>Proin massa augue, lacinia at blandit ac, Fringilla scelerisque tortor. Mauris</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6  mb-30">
                     <div className="about_service_item">
                        <span>02</span>
                        <div className="about_s_img">
                           <img src={require('../image/about_s2.png')} alt="" />
                        </div>
                        <div className="about_service_txt">
                           <h4>Car Parking</h4>
                           <p>Proin massa augue, lacinia at blandit ac, Fringilla scelerisque tortor. Mauris</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                     <div className="about_service_item">
                        <span>03</span>
                        <div className="about_s_img">
                           <img src={require('../image/about_s3.png')} alt="" />
                        </div>
                        <div className="about_service_txt">
                           <h4>Swimming pool</h4>
                           <p>Proin massa augue, lacinia at blandit ac, Fringilla scelerisque tortor. Mauris</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 ">
                     <div className="about_service_item">
                        <span>04</span>
                        <div className="about_s_img">
                           <img src={require('../image/about_s1.png')} alt="" />
                        </div>
                        <div className="about_service_txt">
                           <h4>PickUp & Drop</h4>
                           <p>Proin massa augue, lacinia at blandit ac, Fringilla scelerisque tortor. Mauris</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* about gallery_area */}
         <div className="spacer">
            <div className="container">
               <div className="row">
                  <div className="col-sm-3">
                     <div className="gallery_img">
                        <img src={require('../image/a-img1.jpeg')} alt="" />
                     </div>
                  </div>
                  <div className="col-sm-3">
                     <div className="gallery_img">
                        <img src={require('../image/a-img2.jpeg')} alt="" />
                     </div>
                  </div>
                  <div className="col-sm-3">
                     <div className="gallery_img">
                        <img src={require('../image/a-img3.jpeg')} alt="" />
                     </div>
                  </div>
                  <div className="col-sm-3">
                     <div className="gallery_img">
                        <img src={require('../image/a-img4.jpeg')} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* about members */}

         <div className="spacer">
            <div className="container">
               <div className="row mb-30">
                  <div className="col-xl-12">
                     <div className="team_title text-center">
                        <span class="sub_title">Our Exprt Meamber</span>
                        <h2>Expert Our Services man</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                     <div className="team_item position-relative ">
                        <div className="team_img">
                           <img src={require('../image/team_img1.jpeg')} alt="" />
                        </div>
                        <div className="team_overlay">
                           <div className="team_social">
                              <ul className="d-flex align-items-center justify-content-center">
                                 <li><FaFacebookF></FaFacebookF></li>
                                 <li><FaTwitter></FaTwitter></li>
                                 <li><FaLinkedinIn></FaLinkedinIn></li>
                                 <li><FaBehanceSquare></FaBehanceSquare></li>
                              </ul>
                           </div>
                           <div className="team_over_txt">
                              <h5>Michelle yeoh</h5>
                              <span>Senior Member</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                     <div className="team_item position-relative ">
                        <div className="team_img">
                           <img src={require('../image/team_img2.jpeg')} alt="" />
                        </div>
                        <div className="team_overlay">
                           <div className="team_social">
                              <ul className="d-flex align-items-center justify-content-center">
                                 <li><FaFacebookF></FaFacebookF></li>
                                 <li><FaTwitter></FaTwitter></li>
                                 <li><FaLinkedinIn></FaLinkedinIn></li>
                                 <li><FaBehanceSquare></FaBehanceSquare></li>
                              </ul>
                           </div>
                           <div className="team_over_txt">
                              <h5>Michelle yeoh</h5>
                              <span>Senior Member</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                     <div className="team_item position-relative ">
                        <div className="team_img">
                           <img src={require('../image/team_img3.jpeg')} alt="" />
                        </div>
                        <div className="team_overlay">
                           <div className="team_social">
                              <ul className="d-flex align-items-center justify-content-center">
                                 <li><FaFacebookF></FaFacebookF></li>
                                 <li><FaTwitter></FaTwitter></li>
                                 <li><FaLinkedinIn></FaLinkedinIn></li>
                                 <li><FaBehanceSquare></FaBehanceSquare></li>
                              </ul>
                           </div>
                           <div className="team_over_txt">
                              <h5>Michelle yeoh</h5>
                              <span>Senior Member</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default About;