import React, { useState } from 'react';
import './LearnMore.css';
import { ArrowForwardIos} from '@mui/icons-material';

const LearnMore = () => {
    const [showParagraph, setShowParagraph] = useState(false);

    const handleClick = () => {
        setShowParagraph(!showParagraph);
    };
    return (
        <div className='max-w-[1200px] main-learn container'>
            <h1 className='about-title'>We are a modern digital agency.</h1>
            {/* <hr className='divider'></hr> */}
            <p id='about'>About Us</p>
            <p>We are a full-service digital agency that builds fascinating user experience. Our team creates an exceptional UI visualization and thought-out functionality. By using our developed products people appreciate all around the world</p>
            <div>
                {showParagraph ? (
                    <div>
                        <p>
                            Our team creates an exceptional UI visualization and thought-out functionality. By using our developed products people appreciate all around the world
                        </p>
                        <button className='learn' onClick={handleClick}>Learn Less</button>
                    </div>
                ) : (
                    <button className='learn' onClick={handleClick}>Learn More 
                    <a href="https://youtube.com">
                        <ArrowForwardIos />
                    </a>
                    </button>
                )}
            </div>
        </div>
    );
};

export default LearnMore;