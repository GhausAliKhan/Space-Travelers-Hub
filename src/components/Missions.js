import React, { useEffect } from 'react';
import '../styles/missions.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missionsSlice';

function Missions() {
  const missionsList = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };
  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {missionsList.map((mission) => (
            <tr key={mission.id}>
              <td className="missionName">{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className="memberTd textCenter">
                {mission.reserved ? (
                  <span className="badge bg-info">Active Member</span>
                ) : (
                  <span className="badge bg-secondary">NOT A MEMBER</span>
                )}
              </td>
              <td className="joinBtnTd textCenter">
                {mission.reserved ? (
                  <button
                    type="button"
                    data-testid="leaveMissionBtn"
                    className="btn text-nowrap btn-outline-danger leaveMissionBtn"
                    onClick={() => {
                      handleLeaveMission(mission.id);
                    }}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    data-testid="joinMissionBtn"
                    className="btn text-nowrap btn-outline-dark joinMissioinBtn"
                    onClick={() => {
                      handleJoinMission(mission.id);
                    }}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
