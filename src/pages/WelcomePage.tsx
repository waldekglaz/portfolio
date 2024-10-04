import Image2 from "../assets/img/web-3706561_1280.jpg";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="container">
      <div className="top-layer">
        <div className="title">RE-</div>
        <img src={Image2} alt="image " />
        <div className="box"></div>
      </div>
      <div className="bottom-layer">
        <div className="content">
          <div className="title">SUME</div>
          <div className="vertical">PRESENTATION</div>
          <div className="personal-info">
            <div className="email">waldekglaz@gmail.com</div>
            <Link className="link" to="/menu">
              click here to start
            </Link>
            <div className="personal-info-content">
              <div className="line">
                <div className="label">Name:</div>
                <div className="value">Waldemar Glaz</div>
              </div>
              <div className="line">
                <div className="label">Location:</div>
                <div className="value">European Union / United Kingdom</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
