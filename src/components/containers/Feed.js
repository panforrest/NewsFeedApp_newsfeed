import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Feed extends Component {

  // constructor(){
  // 	super()
  // 	this.state = {

  // 	}
  // }

  render(){
    const selectedFeed = this.props.feed.selectedFeed
    const name = (selectedFeed) ? selectedFeed.name : 'Welcome to NewsFeed'

  	return(
      <div className="content">
        <header>
          <h1>{name}</h1>

          <hr />
          <p>A free and fully responsive site template</p>
        </header>
        <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
        <ul className="actions">
          
        </ul>
      </div>

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
export default connect(stateToProps, dispatchToProps)(Feed)