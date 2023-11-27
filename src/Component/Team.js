import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaBehanceSquare, FaLinkedinIn } from "react-icons/fa";

const Team = () => {
   return (
      <>
         {/* service team banner */}
         <div className="about_banner banner_after">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="about_title text-center">
                        <h1>Services Team</h1>
                        <div className="banner_menu">
                           <ul className="d-flex justify-content-center">
                              <li><Link to="/">Home</Link></li>
                              <li><span>-</span>Services Team</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* service team members */}

         <div className="spacer">
            <div className="container">
               <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                     <div className="team_item position-relative service_member ">
                        <div className="team_img team_after">
                           <img src={require('../image/team_img1.jpeg')} alt="" />
                           <div className="team_over_txt service_team_member">
                              <h5>Michelle yeoh</h5>
                              <span>Senior Member</span>
                              <div className="service_team">
                                 <ul className="d-flex align-items-center justify-content-center">
                                    <li><FaFacebookF></FaFacebookF></li>
                                    <li><FaTwitter></FaTwitter></li>
                                    <li><FaLinkedinIn></FaLinkedinIn></li>
                                    <li><FaBehanceSquare></FaBehanceSquare></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                     <div className="team_item position-relative service_member ">
                        <div className="team_img team_after">
                           <img src={require('../image/team_img2.jpeg')} alt="" />
                           <div className="team_over_txt service_team_member">
                              <h5>James Damian</h5>
                              <span>Senior Member</span>
                              <div className="service_team">
                                 <ul className="d-flex align-items-center justify-content-center">
                                    <li><FaFacebookF></FaFacebookF></li>
                                    <li><FaTwitter></FaTwitter></li>
                                    <li><FaLinkedinIn></FaLinkedinIn></li>
                                    <li><FaBehanceSquare></FaBehanceSquare></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                     <div className="team_item position-relative service_member ">
                        <div className="team_img team_after">
                           <img src={require('../image/team_img3.jpeg')} alt="" />
                           <div className="team_over_txt service_team_member">
                              <h5>Michelle yeoh</h5>
                              <span>Senior Member</span>
                              <div className="service_team">
                                 <ul className="d-flex align-items-center justify-content-center">
                                    <li><FaFacebookF></FaFacebookF></li>
                                    <li><FaTwitter></FaTwitter></li>
                                    <li><FaLinkedinIn></FaLinkedinIn></li>
                                    <li><FaBehanceSquare></FaBehanceSquare></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                     <div className="team_item position-relative service_member ">
                        <div className="team_img team_after">
                           <img src={require('../image/team-8.jpg')} alt="" />
                           <div className="team_over_txt service_team_member">
                              <h5>David Fincher</h5>
                              <span>Senior Member</span>
                              <div className="service_team">
                                 <ul className="d-flex align-items-center justify-content-center">
                                    <li><FaFacebookF></FaFacebookF></li>
                                    <li><FaTwitter></FaTwitter></li>
                                    <li><FaLinkedinIn></FaLinkedinIn></li>
                                    <li><FaBehanceSquare></FaBehanceSquare></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                     <div className="team_item position-relative service_member ">
                        <div className="team_img team_after">
                           <img src={require('../image/team-9.jpg')} alt="" />
                           <div className="team_over_txt service_team_member">
                              <h5>Michelle Reis</h5>
                              <span>Senior Member</span>
                              <div className="service_team">
                                 <ul className="d-flex align-items-center justify-content-center">
                                    <li><FaFacebookF></FaFacebookF></li>
                                    <li><FaTwitter></FaTwitter></li>
                                    <li><FaLinkedinIn></FaLinkedinIn></li>
                                    <li><FaBehanceSquare></FaBehanceSquare></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                     <div className="team_item position-relative service_member ">
                        <div className="team_img team_after">
                           <img src={require('../image/team-10.jpg')} alt="" />
                           <div className="team_over_txt service_team_member">
                              <h5>Amelia Jessica</h5>
                              <span>Senior Member</span>
                              <div className="service_team">
                                 <ul className="d-flex align-items-center justify-content-center">
                                    <li><FaFacebookF></FaFacebookF></li>
                                    <li><FaTwitter></FaTwitter></li>
                                    <li><FaLinkedinIn></FaLinkedinIn></li>
                                    <li><FaBehanceSquare></FaBehanceSquare></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div >

         {/* contact map */}
         <div className="spacer">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="map">
                      </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default Team;