import Instagram from '../../images/instagram.png';
import Ulabs from '../../images/ulabs.png';
import './Footer.css';

function Footer() {
  return (
    <div className= "footer">
        <div className="footer-links">
            <nav>
                <ul>
                <li><a href="#">contact us</a></li>
                <li><a href="#">faq</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">cookies policy</a></li>
                <li><a href="#">legal notice</a></li>
                </ul>
            </nav>
        </div>
        <div className="social-links">
            <p><img src={Ulabs} alt="Instagram"/></p>
            <p><img src={Instagram} alt="Instagram"/></p>
        </div>
    </div>
  );
}

export default Footer;


