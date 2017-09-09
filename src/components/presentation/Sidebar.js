import turbo from 'turbo360'    
import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Sidebar extends Component{
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

  componentDidMount(){
    this.props.fetchFeeds(null)
    .then(data => {
      console.log('FEEDS: ' + JSON.stringify(data))
    })
    .catch(err => {
      console.log('Error: ' + err.message)
    })

    //MY SOLUTION BELOW NOT WORK
    // var turboClient = turbo({site_id:'59b26cf0506af30012a0fd2d'})
    // turboClient.fetch('feed', null)
    // .then(data => {
    //   console.log('FEEDS FETCHED: ' + JSON.stringify(data))
    //   // this.setState({   //I WAS NOT ABLE TO FIGURE OUT "BINDING TO STATE"
    //   //   feeds: data
    //   // })
    //   this.props.fetchFeeds(data)
    // })
    // .catch(err => {
    //   alert('Error: ' + err.message)
    // })
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

    // var turboClient = turbo({site_id:'59b26cf0506af30012a0fd2d'})

    // turboClient.create('feed', this.state.feed)
    // .then(data => {
    //   console.log('FEED CREATED: ' + JSON.stringify(data))

    //   let feeds = Object.assign([], this.state.feeds)
    //   feeds.unshift(data)
    //   this.setState({
    //     feeds: feeds
    //   })
    // })
    // .catch(err => {
    //   alert('Error: ' + err.message)
    // })
  }

  render(){
    const list = (this.props.feed.all == null) ? null : (this.props.feed.all.map((feed, i) => {
                    return <li key={feed.id}><a href="#">{feed.name}</a></li>
                  })) 

  	return(
	  <div>
	    <div className="inner">
	        <section id="search" className="alt">
                <form method="post" action="#">
                	<input type="text" onChange={this.updateFeed.bind(this, 'name')} value={this.state.feed.name} name="query" placeholder="Search" /><br />
                	<input type="text" onChange={this.updateFeed.bind(this, 'url')} value={this.state.feed.url} name="query" placeholder="Feed URL" /><br />
                	<button type="submit" onClick={this.addFeed.bind(this)}>Add Feed</button>
                </form>
            </section>
	        

            <nav id="menu">
	            <header className="major">
	                <h2>My Feeds</h2>
	            </header>

            </nav>	

              <ul>
                {list}
              </ul>

	    </div>
	  </div>
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
export default connect(stateToProps, dispatchToProps)(Sidebar)