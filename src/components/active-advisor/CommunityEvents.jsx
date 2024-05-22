import React from 'react';
import './CommunityEvents.css';

const CommunityEvents = ({ events }) => {
  return (
    <div className="community-events">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityEvents;