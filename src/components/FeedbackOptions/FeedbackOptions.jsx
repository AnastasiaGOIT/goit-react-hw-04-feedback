import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btn__list}>
      {options.map((option, index) => (
        <li key={index}>
          <button className={css.btn} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
