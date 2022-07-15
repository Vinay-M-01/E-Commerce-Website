import "./Footer.css";
import youtubeImage from "../../Assets/youtubeLogo.jpg";
import spotifyImage from "../../Assets/SpotifyLogo.jpg";
import facebookLogo from "../../Assets/Facebook.jpg";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footerText">The Generics</div>
      <div className="images">
        <img src={youtubeImage} alt="Youtube logo" className="youtube" />
        <img src={spotifyImage} alt="Spotify logo" className="spotify" />
        <img src={facebookLogo} alt="Facebook logo" className="facebook" />
      </div>
    </div>
  );
};

export default Footer;
