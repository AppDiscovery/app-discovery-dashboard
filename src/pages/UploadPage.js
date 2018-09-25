import React from 'react'
import { withRouter } from 'react-router-dom'

class UploadPage extends React.Component {
  //   constructor(props) {
  //     super(props)
  //   }

  componentWillMount() {
    if (!sessionStorage.getItem('isLoggedIn')) {
      this.props.history.push('/login')
    }
  }

  render() {
    return <div>UploadPage</div>
  }
}

export default withRouter(UploadPage)
