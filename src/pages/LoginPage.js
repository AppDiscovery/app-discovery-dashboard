import React from 'react'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      account: '',
      passowrd: '',
    }
  }

  render() {
    const { account, passowrd } = this.state

    return (
      <div>
        <input
          type="text"
          placeholder="account"
          value={account}
          onChange={e => this.setState({ account: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={passowrd}
          onChange={e => this.setState({ passowrd: e.target.value })}
        />
      </div>
    )
  }
}

export default LoginPage
