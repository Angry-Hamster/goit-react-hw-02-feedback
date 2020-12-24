import React, { Component } from "react";

import css from './style.module.css'

class Statistic extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  }

  render(){
    return(
      <>
        <ul  className={css.ul}>
          <li><p>good:       {this.props.good}</p></li>
          <li><p>neutral:    {this.props.neutral}</p></li>
          <li><p>bad:        {this.props.bad}</p></li>
          <li><p>total:      {this.props.total}</p></li>
          <li><p>percentage: {Math.floor(this.props.positivePercentage)}</p></li>
        </ul>
      </>
    )
  }
}

export default Statistic