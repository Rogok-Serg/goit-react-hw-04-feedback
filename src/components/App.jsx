import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
// import React from 'react';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    // this.setState(prevState => ({
    //   [option]: prevState[option] + 1,
    // }));
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  //   if (good) {
  //     setGood(good + 1);
  //   } else if (neutral) {
  //     setNeutral(neutral + 1);
  //   } else if (bad) {
  //     setBad(bad + 1);
  //   }
  // };

  // const countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   const result = good + neutral + bad;
  //   return result;
  // };
  const result = good + neutral + bad;

  // const countPositiveFeedbackPercentage = () => {
  //   const { good, neutral, bad } = this.state;
  //   return percentage.toFixed(0);
  // };
  const percentage = ((good / (good + neutral + bad)) * 100).toFixed(0) || 0;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          leaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {result === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={result}
            positivePercentage={percentage}
          />
        )}
      </Section>
    </>
  );
};

// export class oldApp extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     const result = good + neutral + bad;
//     return result;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good, neutral, bad } = this.state;
//     const percentage = (good / (good + neutral + bad)) * 100 || 0;
//     return percentage.toFixed(0);
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             leaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {totalFeedback === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               positivePercentage={positiveFeedbackPercentage}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
//
