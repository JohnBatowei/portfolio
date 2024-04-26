import "../styles/price.scss";
const Price = () => {
  return (
    <>
      <div className="experts">
        <h2>Flexible Pricing for Customized Web Development Solutions</h2>
        <p>
          I offer tailored pricing packages to suit your specific web
          development needs. Whether it’s a one-time development project or an
          ongoing collaboration, my flexible pricing models are crafted to
          provide value and efficiency.
        </p>
      </div>

      <div className="workss">

        <div className="box">
          <h3>Basic Package</h3>
          <h4>For Small Projects</h4>
            <span></span>
          <h2>$49.99</h2>
          <p>Per project</p>
          <a href='/'>Get Started</a>
        </div>

        <div className="box">
          <h3>Medium Package</h3>
          <h4>For Medium Projects</h4>
            <span></span>
          <h2>$79.99</h2>
          <p>Per project</p>
          <a href='/'>Get Started</a>
        </div>

        <div className="box">
          <h3>Expert Package</h3>
          <h4>For Big Projects</h4>
            <span></span>
          <h2>$99.99</h2>
          <p>Per project</p>
          <a href='/'>Get Started</a>
        </div>

      </div>
    </>
  );
};

export default Price;
