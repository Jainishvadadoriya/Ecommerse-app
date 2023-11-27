import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import Accordion from 'react-bootstrap/Accordion';
const Service = () => {
   return (
      <>
         {/* service page */}
         <div className="about_banner banner_after ">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="about_title text-center">
                        <h1>Services Details</h1>
                        <div className="banner_menu">
                           <ul className="d-flex justify-content-center">
                              <li><Link to="/">Home</Link></li>
                              <li><span>-</span>Services Details</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* service start */}
         <div className="spacer">
            <div className="container">
               <div className="row">
                  <div className="col-xl-4 col-lg-4 ">
                     <div className="sidebar_item">
                        <h5>Category</h5>
                        <div className="product_cat">
                           <ul className="p-0 m-0">
                              <li><Link><FaAngleDoubleRight></FaAngleDoubleRight> Luxury Room <span>(08)</span></Link></li>
                              <li><Link><FaAngleDoubleRight></FaAngleDoubleRight> Small Suite <span>(06)</span></Link></li>
                              <li><Link><FaAngleDoubleRight></FaAngleDoubleRight> Single <span>(05)</span></Link></li>
                              <li><Link><FaAngleDoubleRight></FaAngleDoubleRight> Family <span>(09)</span></Link></li>
                              <li><Link><FaAngleDoubleRight></FaAngleDoubleRight> Double Room <span>(03)</span></Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="sidebar_help">
                        
                     </div>
                  </div>
                  <div className="col-xl-8">
                     <div className="service_page_img ">
                        <div className="s_page_img mb-30">
                           <img src={require('../image/room_5.jpeg')} alt="" />
                        </div>
                        <div className="s_page_detail">
                           <h2 className="mb-30">Luxury Room</h2>
                           <p className="mb-0">Maecenas tincidunt hendrerit odio sed consectetur. Duis porta purus sapien, eget pretium augue consectetur ut. Nunc nibh augue, pretium quis imperdiet pellentesque, molestie eget nisi. Sed rutrum sit amet eros ac egestas. Maecenas tincidunt dolor in massa iaculis, vitae dignissim sem finibus. Pellentesque elementum vel arcu sit amet rhoncus.</p>
                           <span>Aenean imperdiet finibus sodales. Sed non ex nisl. Maecenas ut dictum neque, at euismod felis. Etiam rhoncus neque vitae efficitur mollis. Vestibulum sed pulvinar magna suspendisse</span>
                           <p>Vestibulum eget tellus rhoncus, dictum massa a, mattis massa. Cras in leo semper, ultricies ligula nec, ornare tellus. Suspendisse quam risus, semper et ultricies a, commodo eu tortor. Phasellus elementum tincidunt varius. Nam facilisis, ante eget gravida vestibulum, ante nisi feugiat nulla, in dapibus neque turpis et dolor. Vestibulum in urna urna. Nulla at eleifend lorem. Praesent et ex sed metus egestas feugiat. Donec velit libero, feugiat ac dictum vel, dignissim id ante. Praesent hendrerit posuere condimentum.</p>
                           <div className="row mt-30 mb-30">
                              <div className="col-xl-6 col-lg-12 mb-30">
                                 <img src={require('../image/hotel-24.jpg')} alt="" />
                              </div>
                              <div className="col-xl-6 col-lg-12">
                                 <h3 className="mb-20">Customer Benefits</h3>
                                 <p >Businesses A Guide To Attracting Clients To Your Agency, Amazon, Walmart or General Motors. The heart of USA, however</p>
                                 <div className="s_page_icon">
                                    <p><BiSolidRightArrowCircle></BiSolidRightArrowCircle>Automotive service our clients receive </p>
                                    <p><BiSolidRightArrowCircle></BiSolidRightArrowCircle>Praesent efficitur quam sit amet </p>
                                    <p><BiSolidRightArrowCircle></BiSolidRightArrowCircle>We use the latest diagnostic equipment </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="service_acord">
                           <Accordion defaultActiveKey="0">
                              <Accordion.Item eventKey="0">
                                 <Accordion.Header>Do you pay before or after booking a hotel ?</Accordion.Header>
                                 <Accordion.Body>
                                    <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in.</p>
                                 </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="1">
                                 <Accordion.Header>What documents are needed for hotel booking ?</Accordion.Header>
                                 <Accordion.Body>
                                    <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in.</p>
                                 </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="2">
                                 <Accordion.Header>Do hotels charge your card before you check ?</Accordion.Header>
                                 <Accordion.Body>
                                    <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in.</p>
                                 </Accordion.Body>
                              </Accordion.Item>
                           </Accordion>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Service;