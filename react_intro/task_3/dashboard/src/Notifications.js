import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

export function Notifications() {
  return (
    <div className='Notifications'>
      <div className="notif-header">
        <p>Here is the list of notifications</p>
        <button type="submit" style={{
          background: 'none',
          border: 'none',
          fontWeight: 'bolder',
          transform: 'scale(1.6)',
          alignSelf: 'start',
          cursor: 'pointer'
        }} arial-label="Close" onClick={() => {
          console.log('Close button has been clicked')
        }}>x</button>
      </div>
      <ul className='notif-list'>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent">{getLatestNotification()}</li>
      </ul>
    </div>
  );
}