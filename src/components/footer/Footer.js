import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import '../footer/footer.css';


const Footer = () => {

    return (
        <>
            <div className='footer'>
                <h1>Free Travel Tips</h1>
                <div className='search-box1'>
                    <input type='text' value='' placeholder='Search'></input>
                    <button className='search'>Search</button>
                    <button className='book'>Book Now</button>
                </div>

                <div className='footer-details'>
                    <div className='footer-1'>
                        <h2> Get In Touch <br></br> CONECT</h2>
                        <div className='icons'>
                        <div className='icon-1'><BsFacebook /></div>
                        <div className='icon-1'><BsInstagram /></div>
                        <div className='icon-1'><BsTwitter /></div>
                        </div>
                    </div>


                    <div className='footer-2'>
                        <h6>Contact Us</h6>
                        <p>tourdrift786@gmail.com</p>
                        <p>Call us Toll-Free : +91 7869617798</p>
                        <p>Text Us : 786-961-7798</p>
                        <p> See Us : https://www.instagram.com/tour.drift/</p>

                    </div>

                </div>



            </div>
        </>

    )
}
export default Footer;