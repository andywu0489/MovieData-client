import React, { Component } from 'react'
import './App.scss'
import Delete from './auth/components/Delete'
// import Movies from './auth/components/Movies'

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
        {/* <Movies /> */}
        <Delete/>
      </React.Fragment>
    )
  }
}

export default App
