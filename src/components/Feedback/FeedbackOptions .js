import React, { Component } from "react";

import css from "./style.module.css";

class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAdd = (e) => {
    const { name } = e.target;

    // this.setState((prev) => ({ [name]: (prev[name] +1) }));
    this.setState({[name]: ++this.state[name]})

    this.props.onLeaveFeedback(this.state);
  };

  render() {
    return (
      <div>
        <button className={css.button} onClick={this.handleAdd} name="good">
          Good
        </button>
        <button className={css.button} onClick={this.handleAdd} name="neutral">
          Neutral
        </button>
        <button className={css.button} onClick={this.handleAdd} name="bad">
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
