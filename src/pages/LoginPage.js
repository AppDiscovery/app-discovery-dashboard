import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import propsToImmutable from 'hocs/propsToImmutable'
import { login } from 'actions/user'

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
    const { login } = this.props

    if (username === 'admin' && password) {
      login(username, password)
    }
  }

  render() {
    const { username, password } = this.state

    return (
      <div>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={e => this.setState({ username: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => this.setState({ password: e.target.value })}
        />
        <button onClick={() => this.validate()}>Login</button>
      </div>
    )
  }
}

export default compose(connect(null, { login }), propsToImmutable)(LoginPage)
