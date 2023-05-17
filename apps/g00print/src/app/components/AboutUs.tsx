import aboutUsImg from '../../assets/aboutUsImg.jpg';
import '../styles/components/aboutUs.scss'

const AboutUs = () => {

    return (
        <div className="aboutUs">
        <div id="About">
          <h1>Om oss</h1>
          <div  className="aboutUsCard">
          <img src={aboutUsImg} alt="Bild på 3dprinter" />
          <p>
            Skapar prototyper, lampor och annat från STL-filer som ni har eller
            vi har skapat eller har. Hjälper till med tankar och idéer.
          </p>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;