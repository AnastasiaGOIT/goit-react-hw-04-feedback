import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.container}>
      <h3 className={css.statistic__title}>Statistics</h3>
      <ul className={css.statistic__list}>
        <li className={css.statistic__item}>
          <p className={css.statistic__text}>Good:</p>
          <span>{good}</span>
        </li>
        <li className={css.statistic__item}>
          <p className={css.statistic__text}>Neutral:</p>
          <span>{neutral}</span>
        </li>
        <li className={css.statistic__item}>
          <p className={css.statistic__text}>Bad:</p>
          <span>{bad}</span>
        </li>
        <li className={css.statistic__item}>
          <p className={css.statistic__text}>Total:</p>
          <span>{total}</span>
        </li>
        <li className={css.statistic__item}>
          <p className={css.statistic__text}>Positive feedback:</p>
          <span>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};
