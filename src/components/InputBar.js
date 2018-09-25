import React from 'react'
import cx from 'classnames'
import styles from './InputBar.scss'

const InputBar = ({ className, ...rest }) => (
  <input className={cx(styles.root, className)} {...rest} />
)

export default InputBar
