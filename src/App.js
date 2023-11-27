import './App.css';
import './media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Routes, Route } from "react-router-dom"
import Home from './Component/Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import About from './Component/About';
import Team from './Component/Team';
import Service from './Component/Service';
import Error from './Component/Error';
import Blog from './Component/Blog'
import Contact from './Component/Contact';
import Room from './Component/Room';

import 'C:/Rbootstrap/bootsproject/node_modules/slick-carousel/slick/slick-theme.css';
import 'C:/Rbootstrap/bootsproject/node_modules/slick-carousel/slick/slick.css';

function App() {
  return (
    <div className="App">
      <>
      <Header></Header>
      {/* <Home></Home> */}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="Team" element={ <Team/> } />
        <Route path="Service" element={ <Service/> } />
        <Route path="404" element={ <Error/> } />
        <Route path='room' element={<Room/>} />
        <Route path="blog" element={ <Blog/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
      <Footer></Footer>
      </>
    </div>
  );
}

export default App;
