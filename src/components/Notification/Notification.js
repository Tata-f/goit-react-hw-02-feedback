import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default function Notification({ message }) {
  return (
    <div className={s.container}>
      <p className={s.subtitle}>{message}</p>
    </div>
  );
}

Notification.protoTypes = {
  message: PropTypes.string,
};
