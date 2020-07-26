import React, { Component, Fragment } from 'react'
import './button.css'

class Button extends Component {
  render() {
    const { text, nameClass, handler, Icon, status } = this.props
    return (
      <Fragment>
        <button className={nameClass} onClick={handler} disabled={status}>
          <Icon className="position" />
          <span>{text}</span>
        </button>
      </Fragment>
    )
  }
}

export default Button
