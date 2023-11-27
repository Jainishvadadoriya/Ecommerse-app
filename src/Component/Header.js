import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
// import About from './About';
const Header = () => {
   return (
      <>
         <header>

            <Navbar expand="lg" className="header_color p-0">
               <Container>
                  <div className="col">
                     <div className="logo">
                        <Link to='/'><img src={require('../image/logo.png')} alt="" /></Link>
                     </div>
                  </div>
                  <div className="col">
                     <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="menu">
                           <Link to="/">Home</Link>
                           <NavDropdown title="Pages" id="basic-nav-dropdown">
                              <li><Link to="/About">About</Link></li>
                              <li><Link to="Team">Team</Link></li>
                              <li><Link to="Service">Service Detaila</Link></li>
                              <li><Link to="404">404 Page</Link></li>
                           </NavDropdown>
                           <Link to="room">Room</Link>
                           <Link to='blog'>Blog</Link>
                           <Link to='contact'>Contact</Link>
                        </Nav>
                     </Navbar.Collapse>
                  </div>
                  <div className="col header_btn">
                     <Link>BOOK NOW</Link>
                  </div>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
               </Container>
            </Navbar>
         </header>
      </>
   )
}
export default Header;