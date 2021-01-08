import React, { Component } from "react";
import PropTypes from 'prop-types';

import css from './style.module.css'

class Statistic extends Component {
  render(){
    return(
      <>
        <ul  className={css.ul}>
          <li><p>good:       {this.props.good}</p></li>
          <li><p>neutral:    {this.props.neutral}</p></li>
          <li><p>bad:        {this.props.bad}</p></li>
          <li><p>total:      {this.props.total}</p></li>
          <li><p>percentage: {Math.floor(Number(this.props.positivePercentage))}%</p></li>
        </ul>
      </>
    )
  }
}

Statistic.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
}

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}

export default Statistic