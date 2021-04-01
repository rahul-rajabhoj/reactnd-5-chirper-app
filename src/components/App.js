import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { handleInitialData } from '../actions/shared'

import Dashboard from './Dashboard'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { loading } = this.props
    return (
      <div>
        <LoadingBar />
        { loading 
          ? null 
          : <Dashboard /> 
        }
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)