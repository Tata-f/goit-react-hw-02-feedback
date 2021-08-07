import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div className={s.container}>
        <h2 className={s.title}>Please leave feedback</h2>
        {options.map(option => (
          <button
            key={option}
            className={s.button}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
