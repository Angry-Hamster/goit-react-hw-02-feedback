import React, { Component } from "react";

import css from './style.module.css'

class Section  extends Component {
  static defaultProps = {
    title: 'Title',
    component: '<></>'
  }

  render(){
    return(
      <>
        <h3 className={css.title}>{this.props.title}</h3>
        {this.props.component}
      </>
    )
  }
}

export default Section