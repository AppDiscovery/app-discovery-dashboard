import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import propsToImmutable from 'hocs/propsToImmutable'
import { login } from 'actions/user'
import InputBar from 'components/InputBar'
import Button from 'components/Button'
import styles from './LoginPage.scss'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  validate() {
    const { username, password } = this.state
    const { history, login } = this.props

    if (username === 'admin' && password) {
      login(username, password).then(() => history.push('/'))
    }
  }

  render() {
    const { username, password } = this.state

    return (
      <div className={styles.root}>
        <div className={styles.main}>
          <InputBar
            className={styles.inputBar}
            type="text"
            placeholder="username"
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
          />
          <InputBar
            className={styles.inputBar}
            type="password"
            placeholder="password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Button className={styles.button} onClick={() => this.validate()}>
            Login
          </Button>
        </div>
      </div>
    )
  }
}

export default compose(connect(null, { login }), withRouter, propsToImmutable)(
  LoginPage
)
