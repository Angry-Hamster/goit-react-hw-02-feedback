import React, { Component } from "react";
import PropTypes from 'prop-types';

import css from './style.module.css'

class Notification   extends Component {
  render(){
    return(
      <>
        <h3 className={css.title}>{this.props.message}</h3>
      </>
    )
  }
}

Notification.defaultProps = {
  message: 'Title',
}

Notification.propTypes = {
  message: PropTypes.string,
}

export default Notification