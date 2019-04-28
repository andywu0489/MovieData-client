import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Movies from './Movies'

class Refresh extends React.Component {
  constructor () {
    super()

    this.state = {
      response: null
    }
  }

  componentDidMount () {
    this.props.response.data.movies.forEach(movie => (
      axios({
        url: `${apiUrl}/movies/${movie.id}`,
        method: 'delete'
      })
        .then(response => this.setState({ response: response }))
        .catch(console.error)
    ))
  }
  render () {
    return (
      <div>
        {this.state.response ? <Movies/> : ''}
      </div>
    )
  }
}

export default Refresh
