import React, { useEffect } from 'react';
import '../styles/rockets.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const rocketsList = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
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
            <p>{rocket.description}</p>
            <button className="reserve-button" type="button">
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
