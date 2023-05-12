import { useRef, useState } from 'react';
import '../styles/homeView.scss';
import aboutUsImg from '../../assets/aboutUsImg.jpg';
import kenneth from '../../assets/kenneth.jpg';
import Footer from '../ui/Footer';
import Services from '../components/Services';


const HomeView = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="homeWrapper">
      <div className="homeImage">
        <h1>The world of 3D-printing</h1>
        <h3>From imagination to realisation</h3>
      </div>
      <div className="aboutUs">
        <div id="About">
          <h1>Om oss</h1>
          <img src={aboutUsImg} alt="Bild på 3dprinter" />
          <p>
            Skapar prototyper, lampor och annat från STL-filer som ni har eller
            vi har skapat eller har. Hjälper till med tankar och idéer.
          </p>
        </div>
      </div>
     <Services />
      <div className="workers">
        <h1>Vilka jobbar här</h1>
        <div       className="workersWrapper">
        <div className="workersCard">
            <div className="owner">
              <img src={kenneth} alt="" />
              <h4>Kenneth</h4>
              <p>Ägare</p>
            </div>
            <div className="workersHover">
              <img src={kenneth} alt="" />
              <h4>Kenneth</h4>
              <p>
                Mitt mål är att kunna hjälpa er med era idéer och tankar.  
              </p>
              <p>Jag använder Fusion 360</p>
            </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeView;
