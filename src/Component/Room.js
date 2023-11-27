import { Link } from "react-router-dom";
import { BiBed } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { BiChevronRight , BiSolidStar } from "react-icons/bi";


const room = () => {
   return (
      <>
         {/* room banner */}
         <div className="about_banner banner_after room_banner">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="about_title text-center">
                        <h1>Room Style</h1>
                        <div className="banner_menu">
                           <ul className="d-flex justify-content-center">
                              <li><Link to="/">Home</Link></li>
                              <li><span>-</span>Room Style</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* room area start */}

         <div className="spacer">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-lg-4">
                     <div className="right_sidebar">
                        <div className="sidebar_item">
                           <h5>Your Price</h5>
                           <div className="product_price">
                              <ul>
                                 <li><BiBed></BiBed> (3) bed's</li>
                                 <li><FaUsers></FaUsers> (6) Guest's</li>
                              </ul>
                              <h4>$219 <span>/ Night</span></h4>
                              <Link className="home_btn">BOOK NOW <FaArrowRightLong></FaArrowRightLong></Link>
                           </div>
                        </div>
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
                        <div className="sidebar_item check_padding">
                           <h5>Booking Now</h5>
                           <div className="product_check">
                              <div className="item_check mb-10">
                                 <select name="select">
                                    <option value="1">Check In</option>
                                    <option value="2">Check In</option>
                                    <option value="3">Check In</option>
                                    <option value="4">Check In</option>
                                    <option value="5">Check In</option>
                                    <option value="6">Check In</option>
                                 </select>
                              </div>
                           </div>
                           <div className="product_check">
                              <div className="item_check mb-10">
                                 <select name="select">
                                    <option value="1">Check Out</option>
                                    <option value="2">Check Out</option>
                                    <option value="3">Check Out</option>
                                    <option value="4">Check Out</option>
                                    <option value="5">Check Out</option>
                                    <option value="6">Check Out</option>
                                 </select>
                              </div>
                           </div>
                           <div className="product_check">
                              <div className="item_check mb-10">
                                 <select name="select">
                                    <option value="1">Room</option>
                                    <option value="2">1 Room</option>
                                    <option value="3">2 Room</option>
                                    <option value="4">3 Room</option>
                                    <option value="4">4 Room</option>
                                 </select>
                              </div>
                           </div>
                           <Link className="home_btn check_btn">CHECK <FaArrowRightLong></FaArrowRightLong></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-8 order-first order-lg-1">
                     <div className="row">
                        <div className="col-xl-4 col-md-6 mb-30">
                           <div className="room_item">
                              <div className="room_item_img position-relative">
                                 <Link><img src={require('../image/luxury-6.jpg')} alt="" /> </Link>
                              </div>
                              <div className="room_item_txt">
                                 <span>$219/Night</span>
                                 <h4><Link>Double Room</Link></h4>
                                 <p>facilisis tempor erat facilisis. Proin imperdiet rutrum cursus</p>
                                 <div className="product_price">
                                    <ul className="p-0 m-0">
                                       <li><BiBed></BiBed> (3) bed's</li>
                                       <li><FaUsers></FaUsers> (6) Guest's</li>
                                    </ul>
                                 </div>
                                 <div className="room_hover align-items-center">
                                    <Link className="room_btn"><BiChevronRight></BiChevronRight> READ MORE</Link>
                                    <p><BiSolidStar></BiSolidStar>
                                       <span>4.9</span>
                                       2k
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-md-6 mb-30">
                           <div className="room_item">
                              <div className="room_item_img position-relative">
                                 <Link><img src={require('../image/luxury-7.jpg')} alt="" /> </Link>
                              </div>
                              <div className="room_item_txt">
                                 <span>$199/Night</span>
                                 <h4><Link>Small Suite</Link></h4>
                                 <p>facilisis tempor erat facilisis. Proin imperdiet rutrum cursus</p>
                                 <div className="product_price">
                                    <ul className="p-0 m-0">
                                       <li><BiBed></BiBed> (2) bed's</li>
                                       <li><FaUsers></FaUsers> (3) Guest's</li>
                                    </ul>
                                 </div>
                                 <div className="room_hover align-items-center">
                                    <Link className="room_btn"><BiChevronRight></BiChevronRight> READ MORE</Link>
                                    <p><BiSolidStar></BiSolidStar>
                                       <span>4.4</span>
                                       2k
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-md-6 mb-30">
                           <div className="room_item">
                              <div className="room_item_img position-relative">
                                 <Link><img src={require('../image/luxury-8.jpg')} alt="" /> </Link>
                              </div>
                              <div className="room_item_txt">
                                 <span>$302/Night</span>
                                 <h4><Link>Luxury room</Link></h4>
                                 <p>facilisis tempor erat facilisis. Proin imperdiet rutrum cursus</p>
                                 <div className="product_price">
                                    <ul className="p-0 m-0">
                                       <li><BiBed></BiBed> (3) bed's</li>
                                       <li><FaUsers></FaUsers> (6) Guest's</li>
                                    </ul>
                                 </div>
                                 <div className="room_hover align-items-center">
                                    <Link className="room_btn"><BiChevronRight></BiChevronRight> READ MORE</Link>
                                    <p><BiSolidStar></BiSolidStar>
                                       <span>4.4</span>
                                       2k
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-md-6 mb-30">
                           <div className="room_item">
                              <div className="room_item_img position-relative">
                                 <Link><img src={require('../image/luxury-9.jpg')} alt="" /> </Link>
                              </div>
                              <div className="room_item_txt">
                                 <span>$213/Night</span>
                                 <h4><Link>Junior Suite</Link></h4>
                                 <p>facilisis tempor erat facilisis. Proin imperdiet rutrum cursus</p>
                                 <div className="product_price">
                                    <ul className="p-0 m-0">
                                       <li><BiBed></BiBed> (4) bed's</li>
                                       <li><FaUsers></FaUsers> (2) Guest's</li>
                                    </ul>
                                 </div>
                                 <div className="room_hover align-items-center">
                                    <Link className="room_btn"><BiChevronRight></BiChevronRight> READ MORE</Link>
                                    <p><BiSolidStar></BiSolidStar>
                                       <span>3.9</span>
                                       2k
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-md-6 mb-30">
                           <div className="room_item">
                              <div className="room_item_img position-relative">
                                 <Link><img src={require('../image/luxury-10.jpg')} alt="" /> </Link>
                              </div>
                              <div className="room_item_txt">
                                 <span>$420/Night</span>
                                 <h4><Link>Superior Room</Link></h4>
                                 <p>facilisis tempor erat facilisis. Proin imperdiet rutrum cursus</p>
                                 <div className="product_price">
                                    <ul className="p-0 m-0">
                                       <li><BiBed></BiBed> (3) bed's</li>
                                       <li><FaUsers></FaUsers> (7) Guest's</li>
                                    </ul>
                                 </div>
                                 <div className="room_hover align-items-center">
                                    <Link className="room_btn"><BiChevronRight></BiChevronRight> READ MORE</Link>
                                    <p><BiSolidStar></BiSolidStar>
                                       <span>2.9</span>
                                       2k
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-md-6 mb-30">
                           <div className="room_item">
                              <div className="room_item_img position-relative">
                                 <Link><img src={require('../image/luxury-11.jpg')} alt="" /> </Link>
                              </div>
                              <div className="room_item_txt">
                                 <span>$450/Night</span>
                                 <h4><Link>Single Room</Link></h4>
                                 <p>facilisis tempor erat facilisis. Proin imperdiet rutrum cursus</p>
                                 <div className="product_price">
                                    <ul className="p-0 m-0">
                                       <li><BiBed></BiBed> (1) bed's</li>
                                       <li><FaUsers></FaUsers> (2) Guest's</li>
                                    </ul>
                                 </div>
                                 <div className="room_hover align-items-center">
                                    <Link className="room_btn"><BiChevronRight></BiChevronRight> READ MORE</Link>
                                    <p><BiSolidStar></BiSolidStar>
                                       <span>4.8</span>
                                       2k
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-md-6 mb-30">
                           <div className="room_item">
                              <div className="room_item_img position-relative">
                                 <Link><img src={require('../image/luxury-11.jpg')} alt="" /> </Link>
                              </div>
                              <div className="room_item_txt">
                                 <span>$270/Night</span>
                                 <h4><Link>Deluxe Room</Link></h4>
                                 <p>facilisis tempor erat facilisis. Proin imperdiet rutrum cursus</p>
                                 <div className="product_price">
                                    <ul className="p-0 m-0">
                                       <li><BiBed></BiBed> (2) bed's</li>
                                       <li><FaUsers></FaUsers> (5) Guest's</li>
                                    </ul>
                                 </div>
                                 <div className="room_hover align-items-center">
                                    <Link className="room_btn"><BiChevronRight></BiChevronRight> READ MORE</Link>
                                    <p><BiSolidStar></BiSolidStar>
                                       <span>3.5</span>
                                       2k
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-md-6 mb-30">
                           <div className="room_item">
                              <div className="room_item_img position-relative">
                                 <Link><img src={require('../image/luxury-12.jpg')} alt="" /> </Link>
                              </div>
                              <div className="room_item_txt">
                                 <span>$280/Night</span>
                                 <h4><Link>Standard Room</Link></h4>
                                 <p>facilisis tempor erat facilisis. Proin imperdiet rutrum cursus</p>
                                 <div className="product_price">
                                    <ul className="p-0 m-0">
                                       <li><BiBed></BiBed> (3) bed's</li>
                                       <li><FaUsers></FaUsers> (6) Guest's</li>
                                    </ul>
                                 </div>
                                 <div className="room_hover align-items-center">
                                    <Link className="room_btn"><BiChevronRight></BiChevronRight> READ MORE</Link>
                                    <p><BiSolidStar></BiSolidStar>
                                       <span>4.9</span>
                                       2k
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-md-6 mb-30">
                           <div className="room_item">
                              <div className="room_item_img position-relative">
                                 <Link><img src={require('../image/luxury-12.jpg')} alt="" /> </Link>
                              </div>
                              <div className="room_item_txt">
                                 <span>$225/Night</span>
                                 <h4><Link>Family Room</Link></h4>
                                 <p>facilisis tempor erat facilisis. Proin imperdiet rutrum cursus</p>
                                 <div className="product_price">
                                    <ul className="p-0 m-0">
                                       <li><BiBed></BiBed> (3) bed's</li>
                                       <li><FaUsers></FaUsers> (6) Guest's</li>
                                    </ul>
                                 </div>
                                 <div className="room_hover align-items-center">
                                    <Link className="room_btn"><BiChevronRight></BiChevronRight> READ MORE</Link>
                                    <p><BiSolidStar></BiSolidStar>
                                       <span>2.9</span>
                                       2k
                                    </p>
                                 </div>
                              </div>
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

export default room;