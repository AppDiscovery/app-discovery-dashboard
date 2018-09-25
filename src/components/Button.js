import React from 'react'
import cx from 'classnames'
import styles from './Button.scss'

const Button = ({ className, children, ...rest }) => (
  <button className={cx(styles.root, className)} {...rest}>
    {children}
  </button>
)

export default Button
