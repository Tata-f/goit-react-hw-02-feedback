import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ good, bad, neutral, positive, total }) {
  return (
    <>
      <div className={s.container}>
        <h2 className={s.title}>Statistics</h2>
        <p className={s.subtitle}>Good: {good}</p>
        <p className={s.subtitle}>Neutral: {neutral} </p>
        <p className={s.subtitle}>Bad: {bad} </p>
        <p className={s.subtitle}>Total: {total}</p>
        <p className={s.subtitle}>Positive feedback: {positive}%</p>
      </div>
    </>
  );
}

Statistics.protoTypes = {
  good: PropTypes.string,
  bad: PropTypes.string,
  neutral: PropTypes.string,
  positive: PropTypes.string,
  total: PropTypes.string,
};
