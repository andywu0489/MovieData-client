import React from 'react'
import axios from 'axios'
import Links from './links.js'

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
              console.log(member.id)
              return (
                <ul>
                  <li><Links member={member}/></li>
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
