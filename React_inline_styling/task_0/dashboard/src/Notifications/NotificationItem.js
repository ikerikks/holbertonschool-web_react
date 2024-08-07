import PropTypes from 'prop-types';

export default function NotificationItem({
  type = 'default',
  html,
  value,
}) {
  if (html) {
    return (
      <li 
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
      ></li>
    );
  }
  return (
    <li 
      data-notification-type={type}>{value}</li>
  );
}

NotificationItem.propTypes = {
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  })
}