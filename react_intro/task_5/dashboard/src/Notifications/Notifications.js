import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
  return (
    <div className="Notifications">
      <div className="notif-header">
        <p>Here is the list of notifications</p>
        <button type="button" aria-label="Close"
          onClick={() => {
            console.log('Close button has been clicked');
          }}
          style={{
            background: 'none',
            border: 'none',
            fontWeight: 'bold',
            transform: 'scale(1.7)',
            cursor: 'pointer',
            alignItems: 'flex-end',
            padding: '0px 5px',
            height: '0px'
          }}
        >x</button>
      </div>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}