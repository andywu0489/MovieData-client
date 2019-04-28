import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Movies from './Movies'

class Refresh extends React.Component {
  constructor () {
    super()

    this.state = {
      response: 0
    }
  }

  componentDidMount () {
    if (this.props.response.data.movies.length !== 0) {
      this.props.response.data.movies.map(movie => (
        axios({
          url: `${apiUrl}/movies/${movie.id}`,
          method: 'delete'
        })
          .then(response => this.setState({
            response: this.state.response + 1
          }))
          .catch(console.error)
      ))
    }
  }
  render () {
    return (
      <div>
        {this.state.response === this.props.response.data.movies.length ? <Movies/> : ''}
      </div>
    )
  }
}

export default Refresh
