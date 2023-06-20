import React from 'react';
import './About.css';
import '../../Shared/Responsive/Responsive.css'
import LearnMore from './LearnMore/LearnMore';
import learnMore from '../../../assets/images/about pic.png'

const About = () => {
    // md:mx-auto mx-auto flex flex-col sm:flex-col lg:flex-row md:flex-col lg:flex-col
    return (
        <div className='max-w-[1440px] main-about container'>
            <div className='about  max-w-[1200px] container flex flex-col md:flex-col  lg:flex-row md:justify-between md:items-center'>
                <div className='  sub-about container'>
                    <LearnMore />
                </div>
                <div className='image '>
                    <img src={learnMore} className=" rounded-lg shadow-xl  m-2" alt='learn more img' />
                </div>
            </div>
        </div>
    );
};

export default About;