import React, { Component } from "react";
import PropTypes from 'prop-types';

import css from './style.module.css'

class Section  extends Component {
  render(){
    return(
      <>
        <h3 className={css.title}>{this.props.title}</h3>
        {this.props.component}
      </>
    )
  }
}

Section.defaultProps = {
  title: 'Title',
  component: '<></>'
}

Section.propTypes = {
  title: PropTypes.string,
}

export default Section