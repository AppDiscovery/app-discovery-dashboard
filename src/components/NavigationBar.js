import React from 'react'
import { withRouter } from 'react-router-dom'
import cx from 'classnames'
import styles from './NavigationBar.scss'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   currentRoute: '/',
    // }

    this.routes = {
      upload: '/',
      deploy: '/deploy',
    }
  }

  // shouldComponentUpdate() {
  //   // eslint-disable-next-line
  //   console.log(this.props)
  //   this.setState({ currentRoute: this.props.location.pathname })
  //   return true
  // }

  // componentDidUpdate() {
  //   // eslint-disable-next-line
  //   console.log(this.props)
  // }

  // componentWillUpdate() {
  //   // eslint-disable-next-line
  //   console.log(this.props)
  //   // this.setState({ currentRoute: this.props.location.pathname })
  // }

  switchRoute(path) {
    // const { currentRoute } = this.state
    const { pathname: currentRoute } = this.props.location
    const { history } = this.props

    if (currentRoute === path) return

    history.push(path)

    // this.setState({ currentRoute: path }, () => {
    //   history.push(path)
    // })
  }

  render() {
    const { pathname: currentRoute } = this.props.location
    const { upload, deploy } = this.routes
    return (
      <div className={styles.root}>
        <div className={styles.title}>AppDiscovery Dashboard</div>
        <div className={styles.controlBar}>
          <button
            className={cx(styles.button, {
              [styles.activate]: currentRoute === upload,
            })}
            onClick={() => this.switchRoute(upload)}
          >
            Upload
          </button>
          <button
            className={cx(styles.button, {
              [styles.activate]: currentRoute === deploy,
            })}
            onClick={() => this.switchRoute(deploy)}
          >
            Deploy
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(NavigationBar)
