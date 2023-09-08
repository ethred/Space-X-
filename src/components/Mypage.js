import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Mypage.css';

const MyPage = () => {
  const { missions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);

  const joinedMissions = missions.filter((mission) => mission.joined === true);
  const joinedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <section>
      <div className="type">
        <h2>Rocket Joined</h2>
        <ul>
          {joinedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
      <div className="type">
        <h2>Missions Joined</h2>
        <ul>
          {joinedMissions.map((mission) => (
            <li key={mission.id}>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MyPage;
