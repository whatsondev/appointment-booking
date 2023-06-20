import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../../assets/images/people1.png';
import image2 from '../../../assets/images/people2.png';
import image3 from '../../../assets/images/people3.png';
import './ClientSection.css';

const ClientSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000 // Set the auto play speed in milliseconds
    };
    const slides = [
        {
            title: "Clients said about WhatsOn Digital Agency",
            content: "“After evaluating a few outsourcers I decided to work with Flat world solutions because of their professional approach and ability to make changes to what we wanted. In the beginning, we had to make adjustments to the task every week.” ",
            image: image1,
            designation: 'Coordinator',
            name: 'University in the United States',

        },
        {
            title: 'Clients said about WhatsOn Digital Agency',
            content: '“After evaluating a few outsourcers I decided to work with Flat world solutions because of their professional approach and ability to make changes to what we wanted. In the beginning, we had to make adjustments to the task every week.” ',
            image: image2,
            designation: 'Coordinator',
            name: 'University in the United States'
        },
        {
            title: 'Clients said about WhatsOn Digital AgencySlide 3',
            content: '“After evaluating a few outsourcers I decided to work with Flat world solutions because of their professional approach and ability to make changes to what we wanted. In the beginning, we had to make adjustments to the task every week.” ',
            image: image3,
            designation: 'Coordinator',
            name: 'University in the United States' 
        }
    ];
    return (
        <div className='max-w-[1440px] main-client-section container'>
            <div className='max-w-[1280px] mid-client container'>
                <Slider {...settings}>
                    {slides.map((slide, index) => (

                        <div className="slide-content" key={index}>
                            <h3 id='client-title'>{slide.title}</h3>
                            <p className='cont'>{slide.content}</p>
                            <img className='w-24 rounded-full slide-img'
                                src={slide.image} alt={`Slide ${index + 1}`}
                            />
                            <p id='des'>{slide.designation}</p>
                            <p id='company'>{slide.name}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ClientSection;