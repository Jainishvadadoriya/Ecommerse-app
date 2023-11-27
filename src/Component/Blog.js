import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
const blog = () => {
   return (
      <>

         {/* blog banner */}
         <div className="about_banner banner_after blog_banner">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="about_title text-center">
                        <h1>Blog Grid</h1>
                        <div className="banner_menu">
                           <ul className="d-flex justify-content-center">
                              <li><Link to="/">Home</Link></li>
                              <li><span>-</span>Blog Grid</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* blog grid start */}
         <div className="spacer">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4 col-md-6 mb-30">
                     <div className="blog_item">
                        <div className="blog_item_img position-relative overflow-hidden">
                           <img src={require('../image/blog_1.jpeg')} alt="" />
                           <div className="blog_item_date">
                              <h5>21</h5>
                              <span>Jul</span>
                           </div>
                        </div>
                        <div className="blog_item_txt">
                           <h6>Post by - Admin</h6>
                           <h4>Find cheap hotels in the best locations</h4>
                           <Link><BiChevronRight></BiChevronRight> READ MORE</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-30">
                     <div className="blog_item">
                        <div className="blog_item_img position-relative overflow-hidden">
                           <img src={require('../image/blog_2.jpeg')} alt="" />
                           <div className="blog_item_date">
                              <h5>21</h5>
                              <span>Jul</span>
                           </div>
                        </div>
                        <div className="blog_item_txt">
                           <h6>Post by - Admin</h6>
                           <h4>Find cheap hotels in the best locations</h4>
                           <Link><BiChevronRight></BiChevronRight> READ MORE</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-30">
                     <div className="blog_item">
                        <div className="blog_item_img position-relative overflow-hidden">
                           <img src={require('../image/blog_3.jpeg')} alt="" />
                           <div className="blog_item_date">
                              <h5>21</h5>
                              <span>Jul</span>
                           </div>
                        </div>
                        <div className="blog_item_txt">
                           <h6>Post by - Admin</h6>
                           <h4>Find cheap hotels in the best locations</h4>
                           <Link><BiChevronRight></BiChevronRight> READ MORE</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-30">
                     <div className="blog_item">
                        <div className="blog_item_img position-relative overflow-hidden">
                           <img src={require('../image/blog-13.jpg')} alt="" />
                           <div className="blog_item_date">
                              <h5>21</h5>
                              <span>Jul</span>
                           </div>
                        </div>
                        <div className="blog_item_txt">
                           <h6>Post by - Admin</h6>
                           <h4>Find cheap hotels in the best locations</h4>
                           <Link><BiChevronRight></BiChevronRight> READ MORE</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-30">
                     <div className="blog_item">
                        <div className="blog_item_img position-relative overflow-hidden">
                           <img src={require('../image/blog-14.jpg')} alt="" />
                           <div className="blog_item_date">
                              <h5>21</h5>
                              <span>Jul</span>
                           </div>
                        </div>
                        <div className="blog_item_txt">
                           <h6>Post by - Admin</h6>
                           <h4>Find cheap hotels in the best locations</h4>
                           <Link><BiChevronRight></BiChevronRight> READ MORE</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-30">
                     <div className="blog_item">
                        <div className="blog_item_img position-relative overflow-hidden">
                           <img src={require('../image/blog-15.jpg')} alt="" />
                           <div className="blog_item_date">
                              <h5>21</h5>
                              <span>Jul</span>
                           </div>
                        </div>
                        <div className="blog_item_txt">
                           <h6>Post by - Admin</h6>
                           <h4>Find cheap hotels in the best locations</h4>
                           <Link><BiChevronRight></BiChevronRight> READ MORE</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default blog;