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
    // const name = (selectedFeed) ? selectedFeed.name : 'Welcome to NewsFeed'
    let name = 'Welcome to NewsFeed'
    let items = []
    if (selectedFeed) {
      name = selectedFeed.name
      items = (this.props.rss[selectedFeed.url]) ? this.props.rss[selectedFeed.url] : []
    }


  	return(
      <div className="content">
        <header>
          <h1>{name}</h1>

          <hr />
          
        </header>
        <ol>
          { items.map((item, i) => {
              return (
                <li key={i}>{item.title}</li>
              )
            })
          }

        </ol>
      </div>

  	)
  }

}

const stateToProps = (state) => {
  return {
    feed: state.feed,
    rss: state.rss
  }
}

const dispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(stateToProps, dispatchToProps)(Feed)