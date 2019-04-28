import React from 'react'
import axios from 'axios'
// import Directors from './directors'
import apiUrl from '../../apiConfig'
import PostMovie from './postMovie'

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
      .then(response => this.setState({ movies: response }))
      .catch(console.error)

    if (this.state.movies === true) {
      this.state.movies.data.results.forEach(movie => (
        axios({
          url: apiUrl + '/movies',
          method: 'post',
          data: {
            movie: {
              title: movie.title,
              description: movie.overview,
              original_title: movie.original_title
            }
          }
        })
      )
      )
    }
  }

  render () {
    return (
      <div>
        <div>
          {this.state.movies ? this.state.movies.data.results.map(movie => (
            <div key={movie.id}>
              <h2>Title: {movie.title}</h2>
              <p>Description: {movie.overview}</p>
              <p>Original Title: {movie.original_title}</p>
              {/* <Directors movieId={movie.id} movie={movie}/> */}
              <PostMovie movie={movie} movieId={movie.id}/>
            </div>
          )) : ''
          }
        </div>
      </div>
    )
  }
}

export default Movies
