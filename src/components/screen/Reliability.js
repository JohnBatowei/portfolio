import { useEffect } from 'react';
import img from "../assets/logo.jfif";
// import img from "../assets/AriTron Logo.PNG";
import '../styles/reli.scss';

const Reliability = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elementsLeft = document.querySelectorAll('.scroll-left');
      const elementsRight = document.querySelectorAll('.scroll-right');

      elementsLeft.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('animate-left');
        }
      });

      elementsRight.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('animate-right');
        }
      });
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="reliability">
      <h2 className="text scroll-left">Your Reliable Partner for Full Stack Web Development</h2>

      <div className="group-content">
        <div className="img scroll-left">
          <img src={img} alt="" />
        </div>

        <div className="right scroll-right">
          <h2 className="right-text">
            Transforming Complex Ideas into Seamless Web Applications
          </h2>
          <p className="r1-text">
            With a passion for coding and a knack for solving problems, I
            specialize in developing robust, scalable, and user-friendly web
            applications. I create customized solutions tailored to your
            business needs, ensuring seamless integration and optimal
            performance across all platforms.
          </p>

          <div className="vision">
            <h3>My Vision</h3>
            <p>
              To be a leading provider of digital solutions, offering innovative
              and effective web development services that empower businesses to
              achieve their objectives.
            </p>
          </div>

          <div className="vision">
            <h3>My Mission</h3>
            <p>
              To deliver exceptional web development solutions that combine
              technical expertise with creative vision, always staying at the
              forefront of emerging technologies and industry trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reliability;
