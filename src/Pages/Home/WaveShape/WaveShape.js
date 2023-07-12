import React from 'react';
import './WaveShape.css';
import { Link } from 'react-router-dom';

const WaveShape = () => {
    return (

        <div className="wave-container container ">
            <div className="wave-banner">
                <div className=''>
                    <div className='hidden lg:block'>
                        <div className="triangle-0  "></div>
                        <div className="triangle-2"></div>
                        <div className="triangle-3"></div>
                    </div>
                    <h1 className="title">Book Your Appointment</h1>
                    <div className='customer max-w-[1264px] '>
                        <div className='hidden lg:block'>
                            <h1 id='happy' className='round '>60K+</h1>
                            <p>Happy Customers</p>
                        </div>
                        <div className='round mini '></div>
                        <p>The best solution for growing your business.</p>
                        <div className='round mini mini-1'></div>
                        <div className='hidden lg:block' >
                            <h1 id='team' className='round'>150+</h1>
                            <p>Team Members</p>
                        </div>
                    </div>
                    <button className='start-button rounded-full w-40 h-16 font-bold'> <Link to="/appointment">Get Started </Link></button>
                    <div className="triangle-5 hidden lg:block"></div>
                    <div className='customer lg:w-[1264px]'>
                        <div className='hidden lg:block'>
                            <h1 id='Tickets' className='round'>23K+</h1>
                            <p>Tickets Resolved</p>
                        </div>
                        <div className='hidden lg:block'>
                            <h1 className='round'>99%+</h1>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <div className="triangle-4"></div>

                    </div>

                </div>
                <svg className="wave-curve container hidden lg:block"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="1"
                        d="M0,224L48,202.7C96,181,192,139,288,117.3C384,96,480,96,576,128C672,160,768,224,864,250.7C960,277,1056,267,1152,250.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
            
        </div>

    );
};

export default WaveShape;