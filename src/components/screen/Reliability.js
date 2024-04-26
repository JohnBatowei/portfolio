import img from "../assets/logo.jfif";
import '../styles/reli.scss'
const Reliability = () => {
  return (
    <div className="reliability">
      <h2 className="text">Your Reliable Partner for Full Stack Web Development</h2>

      <div className="group-content">
        <div className="img">
        <img src={img} alt="" />
        </div>

        <div className="right">
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
