// import { useRef, useState } from 'react';
import '../styles/homeView.scss';
import AboutUs from '../components/AboutUs';
import Workers from '../components/Workers';
import Footer from '../ui/Footer';
import Services from '../components/Services';

const HomeView = () => {
  // const [isHover, setIsHover] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHover(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHover(false);
  // };

  return (
    <div className="homeWrapper">
      <div className="homeImage">
        <h1>The world of 3D-printing</h1>
        <h3>From imagination to realisation</h3>
      </div>
      <AboutUs />
      <Services />
      <Workers />
      <Footer />
    </div>
  );
};

export default HomeView;
