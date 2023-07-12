import React from 'react';
import "./SocialSection.css";
import { Twitter, FacebookRounded, Instagram, LinkedIn, GitHub, Pinterest, Reddit, Telegram, YouTube } from '@mui/icons-material';

const SocialSection = () => {
    return (
        <div className='max-w-[1200px] lg:w-11/12 main-social container mx-auto' >
            <div className=' social container'>
                    <h1 className='about-title'>Follow the progress on any platform.</h1>
                    <p>Follow the WhatsOn Digital Agency to any platform</p>
                    <div id='social-icon' className="section-icon container">
                        <a id='twit' href="https://twitter.com">
                            <Twitter />
                        </a>
                        <a id='face' href="https://facebook.com">
                            <FacebookRounded />
                        </a>
                        <a id='ins' href="https://instagram.com">
                            <Instagram />
                        </a>
                        <a id='link-in' href="https://linkedin.com/">
                            <LinkedIn />
                        </a>
                        <a href="https://github.com/">
                            <GitHub />
                        </a>
                        <a id='youtube' href="https://youtube.com">
                            <YouTube />
                        </a>
                        <a id='pin' href="https://pinterest.com/">
                            <Pinterest />
                        </a>
                        <a id='reddit' href="https://reddit.com/">
                            <Reddit />
                        </a>
                        <a id='telegram' href="https://telegram.org/">
                            <Telegram />
                        </a>
                    </div>
                
            </div>
        </div>
    );
};

export default SocialSection;