import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import About from './components/about/About';
// import CarouselComponent from './components/carousel/Carousel';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/footer/Footer';



const App = () => {
  return (
    <>



    <BrowserRouter> 
    <Nav />
    <Routes>

      <Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
                 
    </Route>
    </Routes>
    
    </BrowserRouter>

    
    {/* <About/>
    <Contact/> */}
    <Footer/>


    
     
    </>
  );
}

export default App;