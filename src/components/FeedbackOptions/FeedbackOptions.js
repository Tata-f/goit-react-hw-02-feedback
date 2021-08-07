import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <div className={s.container}>
        <h2 className={s.title}>Please leave feedback</h2>

        <button
          className={s.button}
          type="button"
          onClick={onLeaveFeedback.onGood}
        >
          Good
        </button>
        <button
          className={s.button}
          type="button"
          onClick={onLeaveFeedback.onNeutral}
        >
          Neutral
        </button>
        <button
          className={s.button}
          type="button"
          onClick={onLeaveFeedback.onBad}
        >
          Bad
        </button>
      </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.object,
};
