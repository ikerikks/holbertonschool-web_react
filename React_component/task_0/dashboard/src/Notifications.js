import './Notifications.css';
import { getLastestNotification } from './utils';
import closeIcon from './images/close-icon.png';

export function Notifications() {
  return (
    <>
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>

      <div className="Notifications">
        <div>
          <p>Here is the list of notifications</p>
          <button type="button" style={
            {
              height: '20px',
              width: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: '15px',
              right: '15px',
              marginTop: '0px',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }} onClick={() => { console.log('Close button has been clicked') }} aria-label='Close'>
            <img src={closeIcon} alt="" style={
              {
                height: '100%',
                width: 'auto'
              }} />
          </button>
          <ul>
            <li data-default="">New course available</li>
            <li data-urgent="">New resume available</li>
            <li data-urgent="" dangerouslySetInnerHTML={{ __html: getLastestNotification() }} />
          </ul>

        </div>
      </div>
    </>
  );
}
