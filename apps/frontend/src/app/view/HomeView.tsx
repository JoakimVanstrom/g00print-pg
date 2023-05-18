import { useState, useEffect } from 'react';
import '../styles/homeView.scss';
import AboutUs from '../components/AboutUs';
import Workers from '../components/Workers';
import OpenTimes from '../components/OpenTimes';
import Services from '../components/Services';
import Footer from '../ui/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'

const HomeView = () => {
  const arrow = findIconDefinition({ prefix: 'fas', iconName: 'arrow-up' })

  const [isVisable, setIsVisable] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setIsVisable(true);
      } else {
        setIsVisable(false);
      }
    });
  }, []);

  return (
    <div className="homeWrapper">
      <div className="homeImage">
        <h1>The world of 3D-printing</h1>
        <h3>From imagination to realisation</h3>
      </div>
      {isVisable &&
      <div className="backtoTop">
        <a href="#top">
        <FontAwesomeIcon icon={arrow} className="arrow" />
        </a>
      </div>
      }
      <AboutUs />
      <Services />
      <Workers />
      <OpenTimes />
      <Footer />
    </div>
  );
};

export default HomeView;
