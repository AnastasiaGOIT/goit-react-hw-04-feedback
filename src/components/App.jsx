import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { useState } from 'react';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    if (option === 'good') {
      setGood(prevState => prevState + 1);
    } else if (option === 'neutral') {
      setBad(prevState => prevState + 1);
    } else if (option === 'bad') {
      setNeutral(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    const feedbackValues = [good, neutral, bad];

    const total = feedbackValues.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    const percentage = (good / total) * 100;
    return Math.round(percentage);
  };

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section />
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
        // onLeaveFeedbackGood={onLeaveFeedbackGood}
        // onLeaveFeedbackNeutral={onLeaveFeedbackNeutral}
        // onLeaveFeedbackBad={onLeaveFeedbackBad}
      />
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      )}
    </div>
  );
};
