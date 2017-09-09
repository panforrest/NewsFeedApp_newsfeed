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

  selectFeed(feed, event){
    event.preventDefault()
    console.log('selectFeed: '+JSON.stringify(feed))
    this.props.feedSelected(feed)
  }

  render(){
  	const feeds = this.props.feed.all || []
  	return(

      <ul>
        {feeds.map((feed, i) =>{
            const color = (feed == this.props.feed.selectedFeed) ? 'red' : '#333'
            return <li key={feed.id}><a style={{color:color}} onClick={this.selectFeed.bind(this, feed)} href="#">{feed.name}</a></li>
          }
        )}
      </ul>
  	)
  }

}

const stateToProps = (state) => {
  return {
    feed: state.feed,
    selectedFeed: state.feed.selectedFeed
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),  
    addFeed: (params) => dispatch(actions.addFeed(params)),
    feedSelected: (feed) => dispatch(actions.feedSelected(feed))
  }
}
export default connect(stateToProps, dispatchToProps)(Feeds)