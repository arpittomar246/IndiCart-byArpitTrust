import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>IndiCart</h1>
                <h2>By ArpitTrust</h2>
                <p>IndiCart is an Trust founded company by ArpitTrust which believes in donating its 2% of its total year revenue to all orphanages near its founded center.</p>
                <h3>Brands needs IndiCart</h3>
                {/* <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div> */}
            </div>
            <img className="banner-img" src={BannerImg} alt=""/>
        </div>
    </div>;
};

export default Banner;
