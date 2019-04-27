import React from 'react'
import axios from 'axios'
import Directors from './directors'

class Movies extends React.Component {
  constructor () {
    super()

    this.state = {
      movies: null
    }
  }

  componentDidMount () {
    axios({
      url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=bbb0e77b94b09193e6f32d5fac7a3b9c&language=en-US&region=GR',
      method: 'get'
    })
      .then(response => this.setState({ movies: response })
      )
      .catch(console.error)
  }

  render () {
    return (
      <div>
        <p>{ this.state.movies ? console.log(this.state.movies.data.results) : ''}</p>
        <div>
          {this.state.movies ? this.state.movies.data.results.map(movie => (
            <div key={movie.id}>
              <h2>Title: {movie.title}</h2>
              <p>Description: {movie.overview}</p>
              <p>Original Title: {movie.original_title}</p>
              <Directors movieId={movie.id}/>
            </div>
          )) : ''
          }
        </div>
      </div>
    )
  }
}

export default Movies