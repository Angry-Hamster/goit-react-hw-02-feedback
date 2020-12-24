import React, { Component } from "react";

import Statistic from "./Statistic";
import FeedbackOptions  from "./FeedbackOptions ";
import Section from "./Section";
import Notification from "./Notification";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  extendedState = {
    total: 0,
    posetive: 0,
  };

  countTotalFeedback = (state) => {
    const { good, neutral, bad } = state;
    let total = good + neutral + bad;

    this.extendedState.total = total;
  };

  countPositiveFeedbackPercentage = (state) => {
    const {total} = this.extendedState
    const {good} = state
    let posetive = good / total * 100

    this.extendedState.posetive = posetive;
  };

  onLeaveFeedback = (state) => {
    this.setState(state);
    this.countTotalFeedback(state);
    this.countPositiveFeedbackPercentage(state);
  };

  render() {
    return (
      <>
        <Section title='Please leave feedback' component={
        <FeedbackOptions  onLeaveFeedback={this.onLeaveFeedback}/>
        }/>

        <Section title='Statistics' component={
        this.extendedState.total == 0 ?
        <Notification message="No feedback given"/>:
        <Statistic good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.extendedState.total} positivePercentage={this.extendedState.posetive} />
        }/>

      </>
    );
  }
}

export default Feedback;
