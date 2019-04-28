import React from 'react'
import axios from 'axios'
import Refresh from './Refresh'
// import Movies from './Movies'
import apiUrl from '../../apiConfig'

class Delete extends React.Component {
  constructor () {
    super()

    this.state = {
      response: null,
      length: null
    }
  }

  componentDidMount () {
    axios({
      url: apiUrl + '/movies',
      method: 'get'
    })
      .then(response => this.setState({ response: response }))
      .catch(console.error)
  }
  render () {
    return (
      <div>
        {this.state.response ? <Refresh response={this.state.response}/> : ''}
      </div>
    )
  }
}

export default Delete
