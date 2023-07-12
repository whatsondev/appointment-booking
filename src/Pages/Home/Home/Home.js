import React from 'react';
import About from '../About/About';
import ClientSection from '../ClientSection/ClientSection';
import SocialSection from '../SocialSection/SocialSection';

const Home = () => {
    return (
        <div>
            <About></About>
            <ClientSection></ClientSection>
            <SocialSection></SocialSection>
        </div>
    );
};

export default Home;