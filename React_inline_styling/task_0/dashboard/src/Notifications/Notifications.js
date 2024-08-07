import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({
  displayDrawer = false,
  listNotifications
}) {

  return (
    <>
      <div className="menuItem">Your notifications</div>
      {
        displayDrawer &&
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
            { listNotifications.length > 0?
                listNotifications.map((notif, index) => (
                  index === 2?
                    <NotificationItem
                      key={index}
                      type={notif.type}
                      html={notif.html}
                    />:
                    <NotificationItem
                      key={index}
                      type={notif.type}
                      value={notif.value}
                    />
                )):
                <li>No new notification for now</li>
            }
          </ul>
        </div>
      }
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape(NotificationItemShape)
  )
}