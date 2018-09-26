import React from 'react'
import axios from 'axios'
import Button from 'components/Button'
import DeployInfoItem from 'components/DeployInfoItem'
import config from '../config'
import styles from './DeployPage.scss'

const deployInfoItems = [
  {
    itemName: 'App name',
    stateName: 'appName',
    formKeyName: 'app_name',
  },
  {
    itemName: 'Longitude',
    stateName: 'longitude',
    formKeyName: 'longitude',
  },
  {
    itemName: 'Latitude',
    stateName: 'latitude',
    formKeyName: 'latitude',
  },
  {
    itemName: 'Radius in m',
    stateName: 'radius',
    formKeyName: 'radius_m',
  },
  {
    itemName: 'Launch params(json)',
    stateName: 'LaunchParamsJson',
    formKeyName: 'launch_params_json',
  },
  {
    itemName: 'Display Name',
    stateName: 'displayName',
    formKeyName: 'display_name',
  },
]

class DeployPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = deployInfoItems.reduce(
      (acc, cur) => Object.assign(acc, { [cur.stateName]: '' }),
      {}
    )
  }

  componentWillMount() {
    if (!sessionStorage.getItem('isLoggedIn')) {
      this.props.history.push('/login')
    }
  }

  submitDeployInfo() {
    const infoData = deployInfoItems.reduce(
      (acc, cur) =>
        Object.assign(acc, { [cur.formKeyName]: this.state[cur.stateName] }),
      {}
    )

    // eslint-disable-next-line
    console.log(infoData)

    const formData = new FormData()

    Object.keys(infoData).map(key => formData.append(`${key}`, infoData[key]))

    axios.post(`${config.centralServerURL}/app/deploy`, formData)

    // eslint-disable-next-line
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.formBody}>
          {deployInfoItems.map(({ itemName, stateName }) => (
            <DeployInfoItem
              className={styles.deployInfoItem}
              key={stateName}
              itemName={itemName}
              value={this.state[stateName]}
              onChangeCallback={e =>
                this.setState({ [stateName]: e.target.value })
              }
            />
          ))}
          <Button
            className={styles.button}
            onClick={() => this.submitDeployInfo()}
          >
            Submit
          </Button>
        </div>
      </div>
    )
  }
}

export default DeployPage
