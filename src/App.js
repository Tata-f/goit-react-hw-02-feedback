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

  onRateBtnClick = e => {
    const name = e.target.name;

    this.setState(() => ({
      [name]: this.state[name] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const positiveFeedbackPercentage = Math.round(
      (good / this.countTotalFeedback()) * 100,
    );
    return positiveFeedbackPercentage;
  }
  render() {
    const { good, bad, neutral } = this.state;
    const options = ['good', 'neutral', 'bad'];
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onRateBtnClick}
          />
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
