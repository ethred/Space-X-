import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleJoinStatus } from '../Redux/missions/missionSlice';
import './styles/Missions.css';

const Missions = () => {
  const { missions, loading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <table className="missions-table">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>
              <div className="status-column">
                <div className={`status-text ${mission.joined ? 'active-member' : 'not-member'}`}>
                  <p className="status-p">{mission.joined ? 'Active member' : 'Not a member'}</p>
                </div>
              </div>
            </td>
            <td>
              <button
                className={`status-button ${mission.joined ? 'leave' : ''}`}
                type="button"
                onClick={() => {
                  dispatch(toggleJoinStatus(mission.mission_id));
                }}
              >
                {mission.joined ? 'Leave Mission' : 'Join Mission'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
