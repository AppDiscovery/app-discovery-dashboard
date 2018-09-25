import React from 'react'
import NavigationBar from './NavigationBar'
import Routes from '../routes/index'
import styles from './App.scss'

const App = () => (
  <div className={styles.root}>
    <NavigationBar />
    <Routes />
  </div>
)

export default App
