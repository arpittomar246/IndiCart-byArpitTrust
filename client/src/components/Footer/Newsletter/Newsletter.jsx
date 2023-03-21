import "./Newsletter.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin,} from "react-icons/fa";
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">NewsLetter</span>
            <span className="big-text">Sign up fro latest updates</span>
            <div className="form">
                <input type="text" placeholder="Email Address"/>
                <button>Subscribe</button>
            </div>
            <div className="text">Will be used in accordence with our Privacy Policy</div>
            <div className="social-items">
                <div className="icon">
                    <FaFacebookF size={14}/>
                </div>
                <div className="icon">
                    <FaInstagram size={14}/>
                </div>
                <div className="icon">
                    <FaLinkedin size={14}/>
                </div>
                <div className="icon">
                    <FaTwitter size={14}/>
                </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
