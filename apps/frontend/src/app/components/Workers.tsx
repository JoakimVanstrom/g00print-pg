import kenneth from '../../assets/kenneth.jpg';
import '../styles/components/workers.scss';

const Workers = () => {
  return (
    <div className="workers">
      <h1>Vilka jobbar här</h1>
      <div className="workersWrapper">
          <img src={kenneth} alt="" />
            <div className="workersCard">
            <h4>Kenneth</h4>
            <p className="owner">Ägare</p>
            <p>Mitt mål är att kunna hjälpa er med era idéer och tankar.</p>
            <p>Jag använder Fusion 360</p>
            </div>
          </div>
    </div>
  );
};

export default Workers;
