import React, { Component } from "react";

import css from "./style.module.css";

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <button className={css.button} onClick={this.props.onLeaveFeedback} name="good">
          Good
        </button>
        <button className={css.button} onClick={this.props.onLeaveFeedback} name="neutral">
          Neutral
        </button>
        <button className={css.button} onClick={this.props.onLeaveFeedback} name="bad">
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
