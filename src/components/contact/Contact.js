import React, { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import '../contact/Contact.css'


const Contact = () => {
    const form = useRef()

//     const sendEmail = (e) =>{
    
//         e.preventDefault();
    
//         emailjs.sendForm('service_boibuim', 'template_olqr2gj', form.current, 'eka9O5vDIQ94y0XdO')
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           }
//           );
//           e.target.reset(e)
      

// };
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [to,setTo] = useState('tourdrift786@gmail.com')
   

    const sendEmail = async (e) =>{
        e.prevetDefault();
        try{
            await axios.post('/sendemail',{to,name,email,message});
           
            alert('Email sent Successfully')
        }
        catch(error){
            console.log(error);
            alert('Email error')
        }

    }



    return (
        <>


            <div className='contact'>
                <div className='contact-1'>
                    <div className='contact-icon'>
                        <icon><BsFillChatDotsFill /></icon>
                        <h4> Get In Touch</h4>
                        <p> Email : tourdrift786@gmail.com </p>
                        <p> Mobile : +91 7869617798</p>
                        <h6>Hello@Tourdrift.com</h6>
                    </div>
                </div>
                <hr className='line'></hr>
                <div className='contact-2'>
                    <div className='contact2-icon'>
                        <icon><GoLocation /></icon>
                        <h4> Visit Our Location</h4>
                        <p> Lorem ipsum dolor sit amet<br></br>consectetuer adipiscingelit. </p>

                        <h6>Get Directions</h6>
                    </div>


                </div>

            </div>


            <div className='contact-3'>

                <div className='contact-31'>
                    <h5>CONTACT US</h5>
                    <h3> Have Any Questions? feel free to <br></br>
                        contact us.</h3>
                    <p> Lorem ipsum dolor sit amet<br></br>consectetuer adipiscingelit. </p>

                </div>

                <div className='contact-32'>
                    <h5> Write a Message</h5>
                    <form  ref={form} onSubmit={sendEmail} className='form'>
                    <div className='input-box'>
                        
                       

                        <input type='text'  placeholder='Your Name' value={name} name='user_name' onChange={(e) =>setName(e.target.value)} required></input>
                        <input type='email'  placeholder='Your Email' value={email} name='user_email' onChange={(e) =>setEmail(e.target.value)} required></input>
                    </div>
                    <textarea placeholder="Leave A Comment" rows="10"  value={message} name='message' onChange={(e) =>setMessage(e.target.value)}></textarea>

                    <button type='submit' className='btn-send' onSubmit={(e) => setTo(e.target.value)}> Send Message</button>
                    </form>


                </div>
            </div>








        </>
    )
}
export default Contact;