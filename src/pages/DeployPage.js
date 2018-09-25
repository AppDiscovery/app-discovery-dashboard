import React from 'react'
import InputBar from 'components/InputBar'

class DeployPage extends React.Component {
  componentWillMount() {
    if (!sessionStorage.getItem('isLoggedIn')) {
      this.props.history.push('/login')
    }
  }

  render() {
    return <InputBar type="text" placeholder="deploy" />
  }
}

export default DeployPage
