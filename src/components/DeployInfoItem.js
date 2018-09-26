import React from 'react'
import cx from 'classnames'
import InputBar from 'components/InputBar'
import styles from './DeployInfoItem.scss'

const DeployInfoItem = ({
  className, itemName, value, onChangeCallback,
}) => (
  <div className={cx(styles.root, className)}>
    <div className={styles.itemName}>{itemName}</div>
    <InputBar
      className={styles.inputBar}
      value={value}
      onChange={e => onChangeCallback(e)}
    />
  </div>
)

export default DeployInfoItem
