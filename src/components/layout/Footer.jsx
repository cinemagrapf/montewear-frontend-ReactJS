import './Footer.scss';
import { Link } from 'react-router-dom';
import montewearLogo from '../../assets/icons/montewear-logo.png';
import arasakaLogo from '../../assets/icons//arasaka-logo.png';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquarePinterest } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer text-center text-lg-start mt-3">
      <div className="container-fluid text-center text-md-start px-5 pt-5 pb-2 text-white text-uppercase">
        <div className="row">
          {/* Logos Section */}
          <div className="logotypes col-12 col-md-2 col-lg-2 col-xl-2 mx-auto my-auto text-center">
            <p>
              <img src={montewearLogo} alt="Montewear Logo" className="img-fluid" />
            </p>
            <p>
              <img src={arasakaLogo} alt="Arasaka Logo" className="img-fluid" />
            </p>
          </div>
          {/* Links Section 1 column*/}
          <div className="links col-12 col-md-2 col-lg-2 col-xl-1 mx-auto my-auto text-center text-lg-start">
            <p>
              <Link to="/about-us" className="text-reset">
                About Us
              </Link>
            </p>
            <p>
              <Link to="/giftcards" className="text-reset">
                Giftcards
              </Link>
            </p>
            <p>
              <Link to="/lookbook" className="text-reset">
                Lookbook
              </Link>
            </p>
          </div>
          {/* Links Section 2 column*/}
          <div className="links col-12 col-md-2 col-lg-2 col-xl-1 mx-auto my-auto text-center text-lg-start">
            <p>
              <Link to="/blog" className="text-reset">
                Blog
              </Link>
            </p>
            <p>
              <Link to="/feedback" className="text-reset">
                Feedback
              </Link>
            </p>
            <p>
              <Link to="/size-guide" className="text-reset">
                Size Guide
              </Link>
            </p>
          </div>
          {/* Links Section 3 column*/}
          <div className="links col-12 col-md-2 col-lg-2 col-xl-1 mx-auto my-auto text-center text-lg-start">
            <p>
              <Link to="/accessibility" className="text-reset">
                Accessibility
              </Link>
            </p>
            <p>
              <Link to="/careers" className="text-reset">
                Careers
              </Link>
            </p>
            <p>
              <Link to="/contact-us" className="text-reset">
                Contact Us
              </Link>
            </p>
          </div>
          {/* Social Media Section */}
          <div className="col-12 col-md-2 col-lg-2 col-xl-2 mx-auto my-auto">
            <div className="d-flex justify-content-center align-items-center py-3">
              <div className="social-square py-0 px-0">
                <Link
                  to="https://www.facebook.com"
                  target="_blank"
                  className=" text-reset"
                  rel="noreferrer">
                  <FontAwesomeIcon icon={faSquareFacebook} />
                </Link>
                <Link
                  to="https://www.x.com"
                  target="_blank"
                  className=" text-reset"
                  rel="noreferrer">
                  <FontAwesomeIcon icon={faSquareTwitter} />
                </Link>
                <Link
                  to="https://www.instagram.com"
                  target="_blank"
                  className=" text-reset"
                  rel="noreferrer">
                  <FontAwesomeIcon icon={faSquareInstagram} />
                </Link>
                <Link
                  to="https://www.pinterest.com"
                  target="_blank"
                  className=" text-reset"
                  rel="noreferrer">
                  <FontAwesomeIcon icon={faSquarePinterest} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center text-lg-start ps-xl-5 mb-3">
          © 2025 Montewear. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
