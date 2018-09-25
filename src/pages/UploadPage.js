import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
// import cx from 'classnames'
import FileInput from 'components/FileInput'
import config from '../config'
import styles from './UploadPage.scss'

class UploadPage extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     targz: null,
  //   }
  // }

  componentWillMount() {
    if (!sessionStorage.getItem('isLoggedIn')) {
      this.props.history.push('/login')
    }
  }

  uploadFile = (file) => {
    const formData = new FormData()
    formData.append('targz', file)

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
      <div className={styles.root}>
        <FileInput
          className={styles.fileInput}
          uploadFile={file => this.uploadFile(file)}
        />
      </div>
    )
  }
}

export default withRouter(UploadPage)
