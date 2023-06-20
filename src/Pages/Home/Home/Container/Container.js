import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Container.css';

const Container = () => {
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
            title: "Slide 1",
            content: "Content for Slide 1",
            image: '../../../../assets/images/people1.png',
            designation: 'officer 1',
            name: 'name 1',

        },
        {
            title: 'Slide 2',
            content: 'Content for Slide 2',
            image: '../../../../assets/images/people2.png',
            designation: 'officer 2',
            name: 'name 2'
        },
        {
            title: 'Slide 3',
            content: 'Content for Slide 3',
            image: '../../../../assets/images/people3.png',
            designation: 'officer 3',
            name: 'name 3'
        }
    ];


    return (
        <div>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    
                    <div className="slide-content" key={index}>
                        <h3>{slide.title}</h3>
                        <p>{slide.content}</p>
                        <img src={slide.image} alt={`Slide ${index + 1}`} />
                        <p>{slide.name}</p>
                    </div>
                ))}
            </Slider>
<div>
<Slider {...settings}>
                <div className="slide-content">
                    <h3>Slide 1</h3>
                    <p>Content for Slide 1</p>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="../../../../assets/images/people2.png"  alt=''/>
                        </div>
                    </div>
                </div>
                <div className="slide-content">
                    <h3>Slide 2</h3>
                    <p>Content for Slide 2</p>
                </div>
                <div className="slide-content">
                    <h3>Slide 3</h3>
                    <p>Content for Slide 3</p>
                </div>
            </Slider>
</div>
            
        </div>
    );
};

export default Container;





{/* <Slider {...settings}>
                <div className="slide-content">
                    <h3>Slide 1</h3>
                    <p>Content for Slide 1</p>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="../../../../assets/images/people2.png"  alt=''/>
                        </div>
                    </div>
                </div>
                <div className="slide-content">
                    <h3>Slide 2</h3>
                    <p>Content for Slide 2</p>
                </div>
                <div className="slide-content">
                    <h3>Slide 3</h3>
                    <p>Content for Slide 3</p>
                </div>
            </Slider> */}