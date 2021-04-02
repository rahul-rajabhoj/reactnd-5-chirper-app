import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { handleInitialData } from '../actions/shared'

import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

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
          : <TweetPage match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}} /> 
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