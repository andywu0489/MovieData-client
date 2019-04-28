import React from 'react'
import axios from 'axios'
import Links from './Links.js'
// import PostDirector from './PostDirector'
// import PostMovie from './postMovie'

class Directors extends React.Component {
  constructor () {
    super()

    this.state = {
      crew: null,
      name: null
    }
  }

  componentDidMount () {
    axios({
      url: `https://api.themoviedb.org/3/movie/${this.props.movieId}/credits?api_key=bbb0e77b94b09193e6f32d5fac7a3b9c`,
      method: 'get'
    })
      .then(response => this.setState({ crew: response })
      )
      .catch(console.error)
  }

  render () {
    return (
      <div>
        <div>
          <p>Director(s):</p>
          {this.state.crew ? this.state.crew.data.crew.map((member) => {
            if (member.job === 'Director') {
              return (
                <ul key={member.id}>
                  <li><Links member={member} id={this.props.id}/></li>
                </ul>
              )
            }
          }
          ) : ''}
        </div>
      </div>
    )
  }
}

export default Directors
