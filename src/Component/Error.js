import { Link } from "react-router-dom";
const Error = () => {
   return (
      <>
         {/* error page banner */}
         <div className="about_banner banner_after">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="about_title text-center">
                        <h1>Not Fount</h1>
                        <div className="banner_menu">
                           <ul className="d-flex justify-content-center">
                              <li><Link to="/">Home</Link></li>
                              <li><span>-</span>404 page</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* 404 error */}

         <div className="spacer">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="error_page text-center">
                        <img src={require('../image/404.png')} alt="" />
                     </div>
                     <div className="text-center mt-5">
                        <Link className="home_btn">BACK TO HOME</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </>
   )
}

export default Error;