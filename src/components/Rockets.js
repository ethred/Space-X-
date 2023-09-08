import { useDispatch, useSelector } from 'react-redux';
import { cancelReservation, reserveRocket } from '../Redux/rockets/rocketsSlice';
import './styles/Rockets.css';

const Rockets = () => {
  const { rockets, status, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  if (status) {
    return <div className="loading">Loading, please wait...</div>;
  }

  if (error) {
    return (
      <div className="error">Error loading!</div>
    );
  }

  return (
    <div className="rocket_container">
      {rockets.map((rocket) => (
        <section className="space" key={rocket.rocket_id}>
          <div className="img">
            <img src={rocket.flickr_images[0]} alt="" />
          </div>
          <div className="details">
            <div className="headline_h2">{rocket.rocket_name}</div>
            <p className>
              {' '}
              {rocket.reserved ? (
                <span className="reserved">Reserved</span>
              ) : (
                ''
              )}
              {rocket.description}
            </p>
            {rocket.reserved && (
              <button
                type="button"
                className="cancel_reserve_rocket_btn"
                onClick={() => dispatch(cancelReservation(rocket.id))}
              >
                Cancel Reservation
              </button>
            )}
            {!rocket.reserved && (
              <button
                type="button"
                className="reserve_rocket_btn"
                onClick={() => dispatch(reserveRocket(rocket.id))}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Rockets;
