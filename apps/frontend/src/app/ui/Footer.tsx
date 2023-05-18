import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-free/css/all.min.css';
import "./footer.scss"

const Footer = () => {

  const phone = findIconDefinition({ prefix: 'fas', iconName: 'phone' })
  const email = findIconDefinition({ prefix: 'far', iconName: 'envelope' })
  const location = findIconDefinition({ prefix: 'fas', iconName: 'map-marker-alt' })
  const facebook = findIconDefinition({ prefix: 'fab', iconName: 'facebook' })
  const instagram = findIconDefinition({ prefix: 'fab', iconName: 'instagram' })



  return (
    <div className="footerWrapper" id="Contact">
      <div className="footerCard">
      <a href='https://www.google.com/maps/search/%22G00print+AB,+M%C3%B6rbyv%C3%A4gen+26,+18632+Vallentuna+Socken,+Sweden%22/@59.5355518,18.0788376,18.75z' className="footerInfo">
        <div className="footerIcon">
        <FontAwesomeIcon icon={location} />
        </div>
        <div>
          <h4>Adress</h4>
          <p>G00print AB</p>
          <p>Mörbyvägen 26</p>
          <p>18632 Vallentuna Socken</p>
          <p>Sverige</p>
        </div>
      </a>
      <div className="footerInfo">
        <div className="footerIcon">
        <FontAwesomeIcon icon={email} />
        </div>
        <div>
          <h4>E-post</h4>
          <p>info@g00print.se</p>
        </div>
      </div>
      <div className="footerInfo">
        <div className="footerIcon">
        <FontAwesomeIcon icon={phone} />
        </div>
        <div>
          <h4>Telefon</h4>
          <p>+46730766140</p>
        </div>
      </div>
      </div>
      <div className="footerSocialWrapper">  
      <a href="https://www.facebook.com/profile.php?id=100087966620794">
       <FontAwesomeIcon icon={facebook} className="footerSocial"/>
      </a>
      <a href="https://www.instagram.com/g00print/">
       <FontAwesomeIcon icon={instagram} className="footerSocial" />
      </a>
      </div>
      <div className="footerCopyright">
        <p>Copyright © Alla rättigheter förbehållna</p>
      </div>
    </div>
  );
};

export default Footer;
