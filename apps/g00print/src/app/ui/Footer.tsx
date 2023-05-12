import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

import "./footer.scss"

const Footer = () => {

  const phone = findIconDefinition({ prefix: 'fas', iconName: 'phone' })
  const email = findIconDefinition({ prefix: 'far', iconName: 'envelope' })
  const location = findIconDefinition({ prefix: 'fas', iconName: 'map-marker-alt' })
  const facebook = findIconDefinition({ prefix: 'fab', iconName: 'facebook' })
  const instagram = findIconDefinition({ prefix: 'fab', iconName: 'instagram' })


  return (
    <div>
      <div className="footerWrapper">
      <div className="footerInfo">
        <div>
        <FontAwesomeIcon icon={location} />
        </div>
        <div>
          <h4>Adress</h4>
          <p>G00print AB</p>
          <p>Mörbyvägen 26</p>
          <p>18632 Vallentuna Socken</p>
          <p>Sverige</p>
        </div>
      </div>
      <div className="footerInfo">
        <div>
        <FontAwesomeIcon icon={email} />
        </div>
        <div>
          <h4>E-post</h4>
          <p>info@g00print.se</p>
        </div>
      </div>
      <div className="footerInfo">
        <div>
        <FontAwesomeIcon icon={phone} />
        </div>
        <div>
          <p>+46730766140</p>
        </div>
      </div>
      </div>
      <div className="footerSocial">
      <div>
       <FontAwesomeIcon icon={facebook} />
       <FontAwesomeIcon icon={instagram} />
      </div>
      <div>
        <p>Copyright © Alla rättigheter förbehållna</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
