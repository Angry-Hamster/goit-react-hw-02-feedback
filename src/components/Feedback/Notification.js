import React, { Component } from "react";

import css from './style.module.css'

class Notification   extends Component {
  static defaultProps = {
    message: 'No feedback given',
  }

  render(){
    return(
      <>
        <h3 className={css.title}>{this.props.message}</h3>
      </>
    )
  }
}

export default Notification