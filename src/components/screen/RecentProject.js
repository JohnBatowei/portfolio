import '../styles/RecentProject.scss'; // Import SCSS file
import data from './ImageSlider';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RecentProject = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Slide duration
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true, // Autoplay
    autoplaySpeed: 2000, // Autoplay speed
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  return (
    <div className="recent-project" id='project'>
      <div className="top">
        <h2>Some of My Recent Projects</h2>
        <p>
          One of my standout achievements includes developing a web application
          for a leading e-commerce platform. My solution significantly improved
          the platform’s performance, leading to a 40% increase in user
          engagement and positive market feedback.
        </p>
      </div>



    <div className="slide-wrapper">
    <Slider {...settings}>
      {data.map((image, index) => (
        <div key={index} className='image-wrapper-slide'>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
    </div>
    </div>
  );
};

export default RecentProject