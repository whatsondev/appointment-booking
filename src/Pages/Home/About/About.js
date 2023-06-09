import React from 'react';
import './About.css';
import LearnMore from './LearnMore/LearnMore';
import learnMore from '../../../assets/images/about pic.png'

const About = () => {
    return (
        <div id='about' className='max-w-[1440px]   main-about container'>
            <div className='about  xl:max-w-[1200px] lg:max-w-[920px] container flex flex-col md:flex-col  lg:flex-row md:justify-between md:items-center'>
                <div className='  sub-about container'>
                    <LearnMore />
                </div>
                <div className='image '>
                    <img src={learnMore} className=" rounded-lg shadow-xl" alt='learn more img' />
                </div>
            </div>
        </div>
    );
};

export default About;