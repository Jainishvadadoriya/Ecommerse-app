import { FaArrowRightLong } from "react-icons/fa6";
import { BiChevronRightCircle } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Slider from "react-slick";
const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1
}
const Home = () => {
     return (
          <>
               {/* banner start */}

               <div className="banner">
                    <div className="container">
                         <div className="row">
                              <div className="col">
                                   <div className="banner_title position-absolute">
                                        <h1>The Best Hotel
                                             <span>Deals in the World</span>
                                        </h1>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* accommodation area */}
               <div className="spacer">
                    <div className="acco">
                         <div className="container">
                              <div className="row">
                                   <div className="col-xl-5 col-lg-6 col-md-12">
                                        <div className="acco_title">
                                             <span className='sub_title'>Accommodations</span>
                                             <h2>Welcome Our Hotels And Resorts</h2>
                                             <p>Savvy travelers are looking for more than just the next destination on the map. They are looking for a memorable experience and to make new friends along the way.</p>
                                             <a href="index.html" className="home_btn">Read More <FaArrowRightLong className="i"></FaArrowRightLong></a>
                                        </div>
                                   </div>
                                   <div className="col-xl-7 col-lg-6 col-md-12">
                                        <div className="acco_right ">
                                             <div className="acco_img position-relative">
                                                  <img src={require('../image/acco-1.jpeg')} style={{ width: '500px', height: '350px' }} alt="" />
                                                  <div className="acco_img_2 position-absolute  z-2 ">
                                                       <img src={require('../image/acco-2.jpeg')} style={{ width: '350px', height: '300px' }} alt="" />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* luxury start */}
               <div className="spacer luxury">
                    <div className="luxury_area">
                         <div className="container">
                              <div className="row">
                                   <div className="col-xl-12">
                                        <div className="delux_title text-center mb-3">
                                             <span className='sub_title'>Deluxe and Luxury</span>
                                             <h2>Our Luxury Rooms</h2>
                                        </div>
                                   </div>
                                   <div className="col-xl-12">
                                        <div className="delux_menu">
                                             <Tabs
                                                  defaultActiveKey="home"
                                                  transition={false}
                                                  id="noanim-tab-example"
                                                  className="mb-3"
                                             >
                                                  <Tab eventKey="home" title="All Room">
                                                       <div className="row">
                                                            <div className="col-xl-3 col-lg-4">
                                                                 <div className="all_room">
                                                                      <div className="delux_img">
                                                                           <img src={require('../image/room_1.jpeg')} alt="" />
                                                                      </div>
                                                                      <div className="delux_text">
                                                                           <h6><span>$134</span> / Night</h6>
                                                                           <h4><a href="/room-details">Small Suite</a></h4>
                                                                           <a class="simple-btn" href="/">
                                                                                <BiChevronRightCircle></BiChevronRightCircle> Booking Now</a>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-xl-6  col-lg-8 ">
                                                                 <div className="all_room">
                                                                      <div className="delux_img">
                                                                           <img src={require('../image/room_2.jpeg')} alt="" />
                                                                      </div>
                                                                      <div className="delux_text">
                                                                           <h6><span>$199</span> / Night</h6>
                                                                           <h4><a href="/room-details">Deluxe Room</a></h4>
                                                                           <a class="simple-btn" href="/">
                                                                                <BiChevronRightCircle></BiChevronRightCircle> Booking Now</a>
                                                                      </div>

                                                                 </div>
                                                            </div>
                                                            <div className="col-xl-3 col-lg-4 ">
                                                                 <div className="all_room">
                                                                      <div className="delux_img">
                                                                           <img src={require('../image/room_3.jpeg')} alt="" />
                                                                      </div>
                                                                      <div className="delux_text">
                                                                           <h6><span>$319</span> / Night</h6>
                                                                           <h4><a href="/room-details">Family Roome</a></h4>
                                                                           <a class="simple-btn" href="/">
                                                                                <BiChevronRightCircle></BiChevronRightCircle> Booking Now</a>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-xl-6  col-lg-8  ">
                                                                 <div className="all_room">
                                                                      <div className="delux_img">
                                                                           <img src={require('../image/room_4.jpeg')} alt="" />
                                                                      </div>
                                                                      <div className="delux_text">
                                                                           <h6><span>$169</span> / Night</h6>
                                                                           <h4><a href="/room-details">Single Room</a></h4>
                                                                           <a class="simple-btn" href="/">
                                                                                <BiChevronRightCircle></BiChevronRightCircle> Booking Now</a>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-xl-6 ">
                                                                 <div className="all_room">
                                                                      <div className="delux_img">
                                                                           <img src={require('../image/room_5.jpeg')} alt="" />
                                                                      </div>
                                                                      <div className="delux_text">
                                                                           <h6><span>$249</span> / Night</h6>
                                                                           <h4><a href="/room-details">Luxury Room</a></h4>
                                                                           <a class="simple-btn" href="/">
                                                                                <BiChevronRightCircle></BiChevronRightCircle> Booking Now</a>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </Tab>
                                                  <Tab eventKey="luxury" title="Luxury">
                                                       <div className="row">
                                                            <div className="col-xl-6  col-lg-8 mt-3 ">
                                                                 <div className="all_room">
                                                                      <div className="delux_img">
                                                                           <img src={require('../image/room_5.jpeg')} alt="" />
                                                                      </div>
                                                                      <div className="delux_text">
                                                                           <h6><span>$249</span> / Night</h6>
                                                                           <h4><a href="/room-details">Luxury Room</a></h4>
                                                                           <a class="simple-btn" href="/">
                                                                                <BiChevronRightCircle></BiChevronRightCircle> Booking Now</a>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </Tab>
                                                  <Tab eventKey="contact" title="Single"      >
                                                       <div className="row">
                                                            <div className="col-xl-6  col-lg-8  mt-3">
                                                                 <div className="all_room">
                                                                      <div className="delux_img">
                                                                           <img src={require('../image/room_4.jpeg')} alt="" />
                                                                      </div>
                                                                      <div className="delux_text">
                                                                           <h6><span>$169</span> / Night</h6>
                                                                           <h4><a href="/room-details">Single Room</a></h4>
                                                                           <a class="simple-btn" href="/">
                                                                                <BiChevronRightCircle></BiChevronRightCircle> Booking Now</a>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </Tab>
                                                  <Tab eventKey="small" title="Small Suite"      >
                                                       <div className="row">
                                                            <div className="col-xl-3 col-lg-4">
                                                                 <div className="all_room">
                                                                      <div className="delux_img">
                                                                           <img src={require('../image/room_1.jpeg')} alt="" />
                                                                      </div>
                                                                      <div className="delux_text">
                                                                           <h6><span>$134</span> / Night</h6>
                                                                           <h4><a href="/room-details">Small Suite</a></h4>
                                                                           <a class="simple-btn" href="/">
                                                                                <BiChevronRightCircle></BiChevronRightCircle> Booking Now</a>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-xl-6  col-lg-8 ">
                                                                 <div className="all_room">
                                                                      <div className="delux_img">
                                                                           <img src={require('../image/room_2.jpeg')} alt="" />
                                                                      </div>
                                                                      <div className="delux_text">
                                                                           <h6><span>$199</span> / Night</h6>
                                                                           <h4><a href="/room-details">Deluxe Room</a></h4>
                                                                           <a class="simple-btn" href="/">
                                                                                <BiChevronRightCircle></BiChevronRightCircle> Booking Now</a>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </Tab>
                                                  <Tab eventKey="family" title="Family"      >
                                                       <div className="row">
                                                            <div className="col-xl-3 col-lg-4 ">
                                                                 <div className="all_room">
                                                                      <div className="delux_img">
                                                                           <img src={require('../image/room_3.jpeg')} alt="" />
                                                                      </div>
                                                                      <div className="delux_text">
                                                                           <h6><span>$319</span> / Night</h6>
                                                                           <h4><a href="/room-details">Family Roome</a></h4>
                                                                           <a class="simple-btn" href="/">
                                                                                <BiChevronRightCircle></BiChevronRightCircle> Booking Now</a>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </Tab>
                                             </Tabs>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* video area */}

               <div className="spacer">
                    <div className="video_area">
                         <div className="container">
                              <div className="row align-items-center">
                                   <div className="col-xl-7 col-lg-8">
                                        <div className="video_title">
                                             <h2>Book hotel rooms, get deals &amp; book flights online.</h2>
                                        </div>
                                   </div>
                                   <div className="col-xl-5 col-lg-4">
                                        <div className="video_area_right">
                                             <div className="video_play">
                                                  <span><FaPlay></FaPlay></span>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* service_area start */}

               <div className="spacer">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-4 col-md-6">
                                   <div className="service_item">
                                        <div className="service_img">
                                             <img src={require('../image/service_1.png')} alt="" />
                                        </div>
                                        <div className="service_text">
                                             <h5>Room Cleaning</h5>
                                             <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                   <div className="service_item">
                                        <div className="service_img">
                                             <img src={require('../image/service_2.png')} alt="" />
                                        </div>
                                        <div className="service_text">
                                             <h5>Room Wifi</h5>
                                             <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                   <div className="service_item">
                                        <div className="service_img">
                                             <img src={require('../image/service_3.png')} alt="" />
                                        </div>
                                        <div className="service_text">
                                             <h5>Pickup & Drop</h5>
                                             <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* feature area start */}

               <div className="spacer">
                    <div className="container">
                         <div className="row align-items-center justify-content-between bg-left mb-60">
                              <div className="col-xl-6 col-lg-6">
                                   <div className="feature_img">
                                        <img src={require('../image/feature_1.jpeg')} alt="" />
                                   </div>
                              </div>
                              <div className="col-xl-6 col-lg-6">
                                   <div className="feature_right">
                                        <div className="feature_right_text">
                                             <span className='sub_title'>Our Food</span>
                                             <h2>Restaurant Silo</h2>
                                             <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,</p>
                                             <a href="/" className="home_btn">Read More</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="row align-items-center justify-content-between bg-right mb-60">
                              <div className="col-xl-6 col-lg-6 order-last order-lg-first">
                                   <div className="feature_right">
                                        <div className="feature_right_text">
                                             <span className='sub_title'>Read Our Books</span>
                                             <h2>The Library</h2>
                                             <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,</p>
                                             <a href="/" className="home_btn">Read More</a>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 o">
                                   <div className="feature_img">
                                        <img src={require('../image/feature_2.jpeg')} alt="" />
                                   </div>
                              </div>
                         </div>
                         <div className="row align-items-center justify-content-between bg-left mb-60">
                              <div className="col-xl-6 col-lg-6">
                                   <div className="feature_img">
                                        <img src={require('../image/feature_3.jpeg')} alt="" />
                                   </div>
                              </div>
                              <div className="col-xl-6 col-lg-6">
                                   <div className="feature_right">
                                        <div className="feature_right_text">
                                             <span className='sub_title'>Fitness Equipment</span>
                                             <h2>Exercise equipment</h2>
                                             <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,</p>
                                             <a href="/" className="home_btn">Read More</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="row align-items-center justify-content-between bg-right mb-60">
                              <div className="col-xl-6 col-lg-6 order-last order-lg-first">
                                   <div className="feature_right">
                                        <div className="feature_right_text">
                                             <span className='sub_title'>Experiences</span>
                                             <h2>Swimming Pool</h2>
                                             <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,</p>
                                             <a href="/" className="home_btn">Read More</a>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-xl-6 col-lg-6">
                                   <div className="feature_img">
                                        <img src={require('../image/feature_4.jpeg')} alt="" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* testi monial */}

               <div className="spacer">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-12">
                                   <div>
                                        <Slider {...settings}>
                                             <div>
                                                  <div className="testi_area">
                                                       <div className="testi_slide">
                                                            <div className="testi_item">
                                                                 <div className="testi_img">
                                                                      <img src={require('../image/testi_1.jpeg')} alt="" />
                                                                 </div>
                                                                 <div className="testi_text">
                                                                      <h4>David Beckham</h4>
                                                                      <span>UX Designer</span>
                                                                      <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta, porta lectus non, malesuada neque. Integer in tempus leo. Quisque vitae leo ac ex suscipit iaculis eu in nisl. Donec vestibulum volutpat lectus, vel aliquet massa porttitor in. Integer eleifend</p>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="testi_area">
                                                       <div className="testi_slide">
                                                            <div className="testi_item">
                                                                 <div className="testi_img">
                                                                      <img src={require('../image/testi_2.jpeg')} alt="" />
                                                                 </div>
                                                                 <div className="testi_text">
                                                                      <h4>David Fincher</h4>
                                                                      <span>UX Designer</span>
                                                                      <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta, porta lectus non, malesuada neque. Integer in tempus leo. Quisque vitae leo ac ex suscipit iaculis eu in nisl. Donec vestibulum volutpat lectus, vel aliquet massa porttitor in. Integer eleifend</p>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="testi_area">
                                                       <div className="testi_slide">
                                                            <div className="testi_item">
                                                                 <div className="testi_img">
                                                                      <img src={require('../image/testi_3.jpeg')} alt="" />
                                                                 </div>
                                                                 <div className="testi_text">
                                                                      <h4>Ridley Scott</h4>
                                                                      <span>UX Designer</span>
                                                                      <p>Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta, porta lectus non, malesuada neque. Integer in tempus leo. Quisque vitae leo ac ex suscipit iaculis eu in nisl. Donec vestibulum volutpat lectus, vel aliquet massa porttitor in. Integer eleifend</p>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </Slider>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* blog start */}
               <div className="spacer">
                    <div className="container">
                         <div className="row mb-30">
                              <div className="col-lg-12 text-center">
                                   <div className="blog_title">
                                        <span className='sub_title'>Our Blog</span>
                                        <h2>Read Our Blog and News</h2>
                                   </div>
                              </div>
                         </div>
                         <div className="row">
                              <div className=" col-xl-4 col-lg-6 mt-30">
                                   <div className="blog_item_box">
                                        <div className="blog_img">
                                             <a href="/"><img src={require('../image/blog_1.jpeg')} alt="" /></a>
                                        </div>
                                        <div className="blog_text">
                                             <div className="blog_box">
                                                  <div className="blog_date">
                                                       <h3>21</h3>
                                                       <span>july 2023</span>
                                                  </div>
                                                  <div className="blog_box_title">
                                                       <h5>Find cheap hotels in the best locations</h5>
                                                  </div>
                                             </div>
                                             <div className="blog_btn text-center">
                                                  <a href="/">Read More <FaArrowRightLong className="i"></FaArrowRightLong></a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-xl-4 col-lg-6 mt-30">
                                   <div className="blog_item_box">
                                        <div className="blog_img">
                                             <a href="/"><img src={require('../image/blog_2.jpeg')} alt="" /></a>
                                        </div>
                                        <div className="blog_text">
                                             <div className="blog_box">
                                                  <div className="blog_date">
                                                       <h3>25</h3>
                                                       <span>Aug 2023</span>
                                                  </div>
                                                  <div className="blog_box_title">
                                                       <h5>Book a room Today most Affordable Rates.</h5>
                                                  </div>
                                             </div>
                                             <div className="blog_btn text-center">
                                                  <a href="/">Read More <FaArrowRightLong className="i"></FaArrowRightLong></a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className=" col-xl-4 col-lg-6 mt-30">
                                   <div className="blog_item_box">
                                        <div className="blog_img">
                                             <a href="/"><img src={require('../image/blog_3.jpeg')} alt="" /></a>
                                        </div>
                                        <div className="blog_text">
                                             <div className="blog_box">
                                                  <div className="blog_date">
                                                       <h3>29</h3>
                                                       <span>Sep 2023</span>
                                                  </div>
                                                  <div className="blog_box_title">
                                                       <h5>Our expertise covers all Aspects of the industry</h5>
                                                  </div>
                                             </div>
                                             <div className="blog_btn text-center">
                                                  <a href="/">Read More <FaArrowRightLong className="i"></FaArrowRightLong></a>
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



export default Home;