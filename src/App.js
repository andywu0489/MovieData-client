import React, { Component } from 'react'
import './App.scss'
import Movies from './auth/components/Movies'

class App extends Component {
  constructor () {
    super()

    this.state = {
      alerts: []
    }
  }

  render () {
    return (
      <React.Fragment>
        <Movies />
      </React.Fragment>
    )
  }
}

export default App
