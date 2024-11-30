import React from 'react';
import Slider from 'react-slick';
import './HomeCaraousel.css'; // Optional: Custom styles for the carousel
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Image1 from "../../../assets/interior.jpg";
import Image2 from "../../../assets/interior2.jpeg";
import Image3 from "../../../assets/interior5.jpg";
import Image4 from "../../../assets/interior6.jpg";

const HomeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src={Image1} alt="Interior 1" />
                </div>
                <div>
                    <img src={Image2} alt="Interior 2" />
                </div>
                <div>
                    <img src={Image3} alt="Interior 3" />
                </div>
                <div>
                    <img src={Image4} alt="Interior 4" />
                </div>
            </Slider>
        </div>
    );
};

export default HomeCarousel;