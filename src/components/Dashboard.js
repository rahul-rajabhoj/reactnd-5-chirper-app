import React from 'react'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
    render() {
        const { tweetIds } = this.props
        console.log('TweetIds : ', tweetIds)
        return(
            <div>
                <h3 className='center'>Your Timeline</h3>
                <ul className='dashboard-list'>
                    { tweetIds.map((id) => (
                        <li key={id}>
                            <div>Tweet ID : {id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ tweets}) {
    return { 
        tweetIds: Object.keys(tweets).sort((a,b) => { return tweets[b].timestamp - tweets[a].timestamp})
    }
}

export default connect(mapStateToProps)(Dashboard)