import "../styles/components/openTimes.scss"

const OpenTimes = () => {

    return (
        <div className="openTimes">
        <h1>Öppettider</h1>
        <div className="openTimes-wrapper">
            <div className="openTimes-card">
            <h4>Måndag - Torsdag</h4>
            <p>17:00 - 22:00</p>
            <h4>Fredag</h4>
            <p>15:00 - 23:00</p>
            <h4>Lördag - Söndag</h4>
            <p>07:00 - 22:00</p>
            </div>
        </div>
        </div>
    );

};

export default OpenTimes;