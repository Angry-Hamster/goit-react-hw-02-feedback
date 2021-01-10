import React, { Component } from "react";

import Statistic from "./components/Feedback/Statistic";
import FeedbackOptions from "./components/Feedback/FeedbackOptions ";
import Section from "./components/Feedback/Section";
import Notification from "./components/Feedback/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = (e) => {
    this.setState((prev) => ({ [e.target.name]: prev[e.target.name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return  good + neutral + bad;
  };

  countPercentage = () => {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback" component={
        <FeedbackOptions onLeaveFeedback={this.changeState} />
        } />

        <Section
          title="Statistics"
          component={
            this.countTotalFeedback() == 0 ? (
              <Notification message="No feedback given" />
            ) : (
              <Statistic
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback(this.state)}
                positivePercentage={this.countPercentage(this.state)}
              />
            )
          }
        />
      </>
    );
  }
}

export default App;
