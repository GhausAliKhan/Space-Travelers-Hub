import React, { useEffect } from 'react';
import '../styles/rockets.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRockets,
  bookRocket,
  cancelRocketBooking,
} from '../redux/rockets/rocketsSlice';

function Rockets() {
  const rocketsList = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const handleBookRocket = (id) => {
    dispatch(bookRocket(id));
  };

  const handleCancelRocket = (id) => {
    dispatch(cancelRocketBooking(id));
  };
  return (
    <div className="container my-4">
      {rocketsList.map((rocket) => (
        <div className="rocket-card my-4" key={rocket.id}>
          <img
            className="rocket-image"
            src={rocket.flickr_images[0]}
            alt={rocket.name}
          />
          <div className="rocket-info">
            <h2>{rocket.name}</h2>
            <p>
              {rocket.reserved && <span className="badge">Reserved</span>}
              {rocket.description}
            </p>
            {rocket.reserved ? (
              <button
                className="cancel-button"
                type="button"
                onClick={() => handleCancelRocket(rocket.id)}
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                className="reserve-button"
                type="button"
                onClick={() => handleBookRocket(rocket.id)}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
