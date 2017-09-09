import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Feeds extends Component {

  constructor(){
  	super()
  	this.state = {

  	}
  }

  componentDidMount(){
    this.props.fetchFeeds(null)
    .then(data => {
      console.log('FEEDS: ' + JSON.stringify(data))
    })
    .catch(err => {
      console.log('Error: ' + err.message)
    })
  }

  render(){
  	const feeds = this.props.feed.all || []
  	return(

      <ul>
        {feeds.map((feed, i) =>{
            return <li key={feed.id}><a href="#">{feed.name}</a></li>
          }
        )}
      </ul>
  	)
  }

}

const stateToProps = (state) => {
  return {
    feed: state.feed
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),  
    addFeed: (params) => dispatch(actions.addFeed(params))
  }
}
export default connect(stateToProps, dispatchToProps)(Feeds)