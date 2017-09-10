import React, { Component } from 'react'
import { Sidebar } from '../components/presentation'
import { Feeds, Feed } from '../components/containers'
import actions from '../actions'
import { connect } from 'react-redux'

class Home extends Component {

  constructor(){
    super()
    this.state = {
      // feeds: [],
      feed: {
      name: '',
        url: ''
      } 
    }
  }
  
  updateFeed(field, event){
    // console.log('updateFeed: ' + field + '==' +event.target.value)
    let feed = Object.assign({}, this.state.feed)
    feed[field] = event.target.value  //feed(field) = event.target.value
    this.setState({
      feed: feed
    })
  }

  addFeed(event){
    event.preventDefault()
    console.log('addFeed: '+JSON.stringify(this.state.feed))
    this.props.addFeed(this.state.feed)
    .then(data => {
      console.log('FEED CREATED: ' + JSON.stringify(data))
      this.setState({
        feed: {
          name: '',
          url: ''
        }         
      })
    })
    .catch(err => {
      console.log('Error message: ' + err.message)
    })

  }  

	render(){
    // let feed = (this.props.feed.selectedFeed == null) ? 'No feed selected' : this.props.feed.selectedFeed 

		return(


		    <div id="wrapper">
		        <div id="main">
		            <div className="inner">

                  <section id="banner">
                    <Feed />
                    
                  </section>

      					</div>
      			</div>

            <div>
              <div className="inner">
                <section id="search" className="alt">
                      
                        <input type="text" onChange={this.updateFeed.bind(this, 'name')} value={this.state.feed.name} name="query" placeholder="Search" /><br />
                        <input type="text" onChange={this.updateFeed.bind(this, 'url')} value={this.state.feed.url} name="query" placeholder="Feed URL" /><br />
                        <button type="submit" onClick={this.addFeed.bind(this)}>Add Feed</button>
                      
                  </section>
                

                  <nav id="menu">
                    <header className="major">
                        <h2>My Feeds</h2>
                    </header>
                    <Feeds />

                    
                </nav>
              </div>
            </div>
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
    // feedSelected: (feed) => dispatch(actions.feedSelected(feed))
  }
}
export default connect(stateToProps, dispatchToProps)(Home)