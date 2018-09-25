import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import config from '../config'

class UploadPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      targz: null,
    }
  }

  componentWillMount() {
    if (!sessionStorage.getItem('isLoggedIn')) {
      this.props.history.push('/login')
    }
  }

  uploadFile() {
    const { targz } = this.state

    const formData = new FormData()
    formData.append('targz', targz)

    axios({
      method: 'post',
      url: `${config.centralServerURL}/app/upload`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    })
  }

  render() {
    return (
      <div>
        <input
          type="file"
          onChange={e => this.setState({ targz: e.target.files[0] })}
        />
        <button onClick={() => this.uploadFile()}>Upload</button>
      </div>
    )
  }
}

export default withRouter(UploadPage)
