import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Directors from './Directors'

class PostMovie extends React.Component {
  constructor () {
    super()

    this.state = {
      response: null
    }
  }

  componentDidMount () {
    axios({
      url: apiUrl + '/movies',
      method: 'post',
      data: {
        movie: {
          title: this.props.movie.title,
          description: this.props.movie.overview,
          original_title: this.props.movie.original_title
        }
      }
    })
      .then(response => this.setState({ response: response }), response => console.log(response))
      .catch(console.error)
  }
  render () {
    return (
      <div>
        {this.state.response ? <Directors movieId={this.props.movieId} id={this.state.response.data.movie.id}/> : ''}
      </div>
    )
  }
}

export default PostMovie
