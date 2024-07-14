import "../styles/expert.scss";
const Expert = () => {
  return (
    <div className='wrapper-exprt'>
      <div className="expert">
        <h2>Expertise and Experience to Deliver Results</h2>
        <p>
          My expertise and experience cover a wide range of web development
          technologies, including full stack development, React.js, Node.js,
          Express.js, MongoDB, and more. I have a deep understanding of the
          latest tools and techniques, and I use this knowledge to create
          cutting-edge solutions that deliver tangible results for your
          business.
        </p>
      </div>

      <div className="work">
        <div className="box">
          <h4>2021 – Present Full Stack Web Developer</h4>
          <h3>GIVITEC LTD</h3>
          <p>
            Developed and maintained web applications for clients, working
            closely with project managers and designers to ensure seamless
            integration and high-quality delivery.
            <a href="/">Read more</a>
          </p>
        </div>

        <div className="box">
          <h4>2020 – 2021 Junior Web Developer</h4>
          <h3>DEF Agency</h3>
          <p>
            Assisted senior developers in building and testing web applications,
            gaining valuable experience in industry-standard tools and
            technologies.
            <a href="/">Read more</a>
          </p>
        </div>

        <div className="box">
          <h4>2019 – 2020 Freelance Web Developer</h4>
          <h3>GHI Corporation</h3>
          <p>
            Collaborated with clients to understand their business needs and
            requirements, developing customized web solutions to meet their
            unique objectives.
            <a href="/">Read more</a>
          </p>
        </div>

        <div className="box">
          <h4>2018 – 2019 Intern Web Developer</h4>
          <h3>JKL Enterprises</h3>
          <p>
            Worked on internal web development projects, gaining hands-on
            experience in the full development lifecycle from ideation to
            deployment.
            <a href="/">Read more</a>
          </p>
        </div>
      </div>


      <div className="range">

        <div className="range-box">
          <h4>Full Stack Development</h4>
          <div className="range-percent">
            <span></span>
          </div>
        </div>

        <div className="range-box">
          <h4>Node.js</h4>
          <div className="range-percent">
            <span></span>
          </div>
        </div>

        <div className="range-box">
          <h4>React.js</h4>
          <div className="range-percent">
            <span></span>
          </div>
        </div>

        <div className="range-box">
          <h4>Express.js</h4>
          <div className="range-percent">
            <span></span>
          </div>
        </div>

        <div className="range-box">
          <h4>Python</h4>
          <div className="range-percent">
            <span></span>
          </div>
        </div>

        <div className="range-box">
          <h4>MongoDB</h4>
          <div className="range-percent">
            <span></span>
          </div>
        </div>

        <div className="range-box">
          <h4>MySQL</h4>
          <div className="range-percent">
            <span></span>
          </div>
        </div>

        <div className="range-box">
          <h4>C/C++</h4>
          <div className="range-percent">
            <span></span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Expert;
