import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import { HTTP } from '../../utils'

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
    // console.log('selectFeed: '+JSON.stringify(feed))
    this.props.feedSelected(feed)

    const items = this.props.rss[feed.url]
    if (items != null){  //WE ALREADY HAVE THE DATA
      console.log(JSON.stringify(items))
    }
    //https://api.rss2json.com/v1/api.json
    const endpoint = 'http://api.rss2json.com/v1/api.json'
    const params = {
      rss_url: feed.url
    }

    this.props.fetchRssFeed(endpoint, params)
    .then(data => {
      // console.log('RSS FEED: ' + JSON.stringify(data))
    })
    .catch(err => {
      alert('Error: ' + err.message)
    })
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
    selectedFeed: state.feed.selectedFeed,
    rss: state.rss
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),  
    addFeed: (params) => dispatch(actions.addFeed(params)),
    feedSelected: (feed) => dispatch(actions.feedSelected(feed)),
    fetchRssFeed: (url, params) => dispatch(actions.fetchRssFeed(url, params))

  }
}
export default connect(stateToProps, dispatchToProps)(Feeds)