import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickOnGood = () => {
    this.setState({
      good: this.state.good + 1,
    });
  };
  clickOnNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };
  clickOnBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { bad, neutral } = this.state;
    const positiveFeedback = this.countTotalFeedback() - neutral - bad;
    const positiveFeedbackPercentage = Math.round(
      (positiveFeedback / this.countTotalFeedback()) * 100,
    );
    return positiveFeedbackPercentage;
  }
  render() {
    const { good, bad, neutral } = this.state;

    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const onGood = this.clickOnGood;
    const onNeutral = this.clickOnNeutral;
    const onBad = this.clickOnBad;

    return (
      <>
        <Section>
          <FeedbackOptions onLeaveFeedback={{ onGood, onNeutral, onBad }} />
        </Section>
        <Section>
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              positive={positive}
              total={total}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
