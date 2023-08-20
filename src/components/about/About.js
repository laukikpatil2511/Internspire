import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoGoal } from 'react-icons/go';

// import {BsArrowRightCircleFill} from 'react-icons/bs';
import '../about/About.css'


const About = () => {

    return (
        <>


            <div className='section-2'>
                {/* <img src='about-bg.jpg' alt='about-bg'></img> */}
                <div className='section-21'>
                    <img src='person-01.jpg' alt='person'></img>

                </div>
                <div className='section-22'>
                    <h6>Best Tour Services</h6>
                    <h3>Trusted & Award WinningTour<br></br> Agency</h3>
                    <h5 className='para'>By investing in technology that takes the friction out<br></br>of travel .Wherever you want to go and whatever you<br></br> want to do,Tourdrift makes it easy and supports you<br></br> with 24/7 customer support</h5>
                    <p><GoGoal /> Our services are more affordable than you think</p>
                    <p><GoGoal /> We are a fully insured nationally ranked brand.</p>
                    <p><GoGoal /> We are a fully insured nationally ranked brand.</p>
                    <p><GoGoal /> We are a fully insured nationally ranked brand.</p>
                </div>

            </div>

            <div className='section-3'>
                <div className='section-31'>
                    <div className='main-box'>
                        <div className='box'>
                            <h3>01<span><h4>Flights Tickets</h4></span></h3>
                            <p>Lorem ipsum dolor sit amet,<br></br>
                                consectetuer adipiscing elit,sed<br></br>
                                diam nonummy nibh tempor cum<br></br>
                                soluta nobis consectetuer nihil<br></br>
                                imperdiet doming...

                            </p>
                        </div>

                        <div className='box'>
                            <h3>02<span><h4>Luxury Hotels</h4></span></h3>
                            <p>Lorem ipsum dolor sit amet,<br></br>
                                consectetuer adipiscing elit,sed<br></br>
                                diam nonummy nibh tempor cum<br></br>
                                soluta nobis consectetuer nihil<br></br>
                                imperdiet doming...

                            </p>
                        </div>

                        <div className='box'>
                            <h3>03<span><h4>Visa Process</h4></span></h3>
                            <p>Lorem ipsum dolor sit amet,<br></br>
                                consectetuer adipiscing elit,sed<br></br>
                                diam nonummy nibh tempor cum<br></br>
                                soluta nobis consectetuer nihil<br></br>
                                imperdiet doming...
                            </p>
                        </div>
                    </div>

                    <div className='main-box'>
                        <div className='box'>
                            <h3>04<span><h4>Tourist Guide</h4></span></h3>
                            <p>Lorem ipsum dolor sit amet,<br></br>
                                consectetuer adipiscing elit,sed<br></br>
                                diam nonummy nibh tempor cum<br></br>
                                soluta nobis consectetuer nihil<br></br>
                                imperdiet doming...

                            </p>
                        </div>

                        <div className='box' id='box5'>
                            <h3>05<span><h4>International Packages</h4></span></h3>
                            <p>Lorem ipsum dolor sit amet,<br></br>
                                consectetuer adipiscing elit,sed<br></br>
                                diam nonummy nibh tempor cum<br></br>
                                soluta nobis consectetuer nihil<br></br>
                                imperdiet doming...

                            </p>
                        </div>
                    </div>
                </div>
            </div >

            <div className='section-4'>

                <img src='nature.jpg' alt='nature'></img>
                <div className='nature-image'>

                    <h2>Get 10% off On Your Next Travel</h2>
                    <p>Travel between 22 June to 21 July to get existing offers along with a sure 10% cash discount</p>
                    <button> Explore Tour</button>

                </div>
            </div>

            <div className='section-5'>
                <h3>Top Tour Reviews</h3>
                <div className='section-5text'>
                <div className='section-51'>
                    <div className='text5'>
                        <p>Lorem ipsum denisode kantakktios<br></br>
                        kartbetaining pedade eftersom intran regt.<br></br>
                        Polysk Spoilervarning gack i sosade i segisk <br></br>
                        regisk polynde.Krorade al ana kross.Juna<br></br>
                        kavis i sojspeng hypant .i vafanytt sogan.</p>

                    </div>
                    <div className='image-details'>
                        <img src='Image-1.jpeg' alt='member-1'></img>
                        <p>Kevin Smith</p>

                    </div>
                </div>

                <div className='section-51'>
                    <div className='text5'>
                        <p>Lorem ipsum denisode kantakktios<br></br>
                        kartbetaining pedade eftersom intran regt.<br></br>
                        Polysk Spoilervarning gack i sosade i segisk <br></br>
                        regisk polynde.Krorade al ana kross.Juna<br></br>
                        kavis i sojspeng hypant .i vafanytt sogan.</p>

                    </div>
                    <div className='image-details'>
                        <img src='Image-2.jpeg' alt='member-2'></img>
                        <p>Christine Eve</p>
                    </div>
                </div>

                <div className='section-51'>
                    <div className='text5'>
                        <p>Lorem ipsum denisode kantakktios<br></br>
                        kartbetaining pedade eftersom intran regt.<br></br>
                        Polysk Spoilervarning gack i sosade i segisk <br></br>
                        regisk polynde.Krorade al ana kross.Juna<br></br>
                        kavis i sojspeng hypant .i vafanytt sogan.</p>

                    </div>
                    <div className='image-details'>
                        <img src='Image-3.jpeg' alt='member-3'></img>
                            <p>Mike</p>
                    </div>
                </div>
                </div>

            </div>

        </>
    )
}
export default About;