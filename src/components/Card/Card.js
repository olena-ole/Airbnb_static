import './card.css';
import pin from '../../icons/pin.svg';

export default function Card({card}) {

    return (
        <div className="card--container">
            <img className="card--image" src={card.imageUrl} alt={card.title} />
            <div className="card--info">
                <div className="card--location">
                    <img src={pin} alt="" className="card--pin" />
                    <span>{card.location}</span>
                    <a href={card.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h2 className="card--title">{card.title}</h2>
                <p className="card--timeline">
                    <span>{`${card.startDate} - `}</span>
                    <span>{card.endDate}</span>
                </p>
                <p className="card--descr">{card.description}</p>
            </div>
        </div>
    )

}