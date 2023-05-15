import kenneth from '../../assets/kenneth.jpg';
import '../styles/components/workers.scss'

const Workers = () => {

    return (
        <div className="workers">
        <h1>Vilka jobbar här</h1>
        <div className="workersWrapper">
          <div className="workersCard">
            <div className="owner">
              <img src={kenneth} alt="" />
              <h4>Kenneth</h4>
              <p>Ägare</p>
            </div>
            <div className="workersHover">
              <img src={kenneth} alt="" />
              <h4>Kenneth</h4>
              <p>Ägare</p>
              <p>Mitt mål är att kunna hjälpa er med era idéer och tankar.</p>
              <p>Jag använder Fusion 360</p>
            </div>
          </div>
        </div>
      </div>
    );

};

export default Workers;