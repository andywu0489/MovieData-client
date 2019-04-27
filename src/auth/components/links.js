import React from 'react'
import axios from 'axios'

class Links extends React.Component {
  constructor () {
    super()

    this.state = {
      profile: null
    }
  }

  componentDidMount () {
    axios({
      url: `https://api.themoviedb.org/3/person/${this.props.member.id}?api_key=bbb0e77b94b09193e6f32d5fac7a3b9c&language=en-US`,
      method: 'get'
    })
      .then(response => this.setState({ profile: response.data.imdb_id })
      )
      .catch(console.error)
  }

  render () {
    return (
      <a href={`https://www.imdb.com/name/${this.state.profile}`}>{this.props.member.name}</a>
    )
  }
}

export default Links
