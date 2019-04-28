import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class PostDirector extends React.Component {
  constructor () {
    super()

    this.state = {
      response: null
    }
  }

  componentDidMount () {
    axios({
      url: apiUrl + '/directors',
      method: 'post',
      data: {
        director: {
          movie_id: this.props.id,
          name: this.props.member.name,
          link: `https://www.imdb.com/name/${this.props.link}`
        }
      }
    })
      .then(response => console.log(response))
      .catch(console.error)
  }
  render () {
    return (
      <div>
      </div>
    )
  }
}

export default PostDirector
