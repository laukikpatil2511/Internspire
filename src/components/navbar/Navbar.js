import React from 'react'
import { Link } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";
import { Carousel } from 'react-responsive-carousel';
// import Footer from '../footer/Footer'
import '../navbar/Navbar.css';


const Nav = () => {
    // const { loginWithRedirect,logout , user, isAuthenticated,} = useAuth0();
    return (

        <>

            <div className='nav'> 
                <nav>
                    <div class="navbrand">
                        <img src='tdlogo.jpg' alt='tdlogo'></img>
                    </div>
                    <ul class="navbar">
                        <li className='search-box'>
                            <input type='text' value='' placeholder='Search '></input>
                        </li>
                        <li>
                            <Link to="/home" className='link'>
                                <a className='active' style={{ color: '#FF4127' }}>Home</a></Link>
                        </li>
                        <li>
                            <Link to="/visa" className='link'>
                                <a className='active' >Visa</a></Link>
                        </li>
                        <li>
                            <Link to="/about" className='link'>
                                <a className='active' >About</a></Link>
                        </li>
                        <li>
                            <Link to="/services" className='link'>
                                <a className='active' >Services</a></Link>
                        </li>
                        <li>
                            <Link to="/contact" className='link'>
                                <a className='active' >Contact</a></Link>
                        </li>

                        <li>
                            <button className='icon'>Log In</button>
                        </li>
                        <li className='humburger'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </li>
                    </ul>
                </nav>
                <div className='head'>
                    <img src='about-bg.jpg' alt='about-bg'></img>
                    
                    <div className='head-1'>
                        <h2 > We are Grand Tour World <br></br> Class Travel Agency</h2>
                        <h6>Trips,experiences,and palces. All in one service.</h6>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Nav;
