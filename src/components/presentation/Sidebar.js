// method="post" action="#"
    // <div id="sidebar">
import turbo from 'turbo360'    
import React, { Component } from 'react'
// import { Post } from '../../theme'

class Sidebar extends Component{
  constructor(){
  	super()
  	this.state = {
      feeds: [],
	    feed: {
	  	name: '',
        url: ''
	  } 
  	}
  }
  
  updateFeed(field, event){
    console.log('updateFeed: ' + field + '==' +event.target.value)
    let feed = Object.assign({}, this.state.feed)
    feed[field] = event.target.value  //feed(field) = event.target.value
    this.setState({
      feed: feed
    })
  }

  addFeed(event){
  	event.preventDefault()
  	console.log('addFeed: '+JSON.stringify(this.state.feed))

    var turboClient = turbo({site_id:'59b26cf0506af30012a0fd2d'})

    turboClient.create('feed', this.state.feed)
    .then(data => {
      console.log('FEED CREATED: ' + JSON.stringify(data))

      let feeds = Object.assign([], this.state.feeds)
      feeds.push(data)
      this.setState({
        feeds: feeds
      })
    })
    .catch(err => {
      alert('Error: ' + err.message)
    })
  }

  render(){
  	return(
	  <div>
	    <div className="inner">
	        <section id="search" className="alt">
                <form method="post" action="#">
                	<input type="text" onChange={this.updateFeed.bind(this, 'name')} name="query" placeholder="Search" /><br />
                	<input type="text" onChange={this.updateFeed.bind(this, 'url')} name="query" placeholder="Feed URL" /><br />
                	<button type="submit" onClick={this.addFeed.bind(this)}>Add Feed</button>
                </form>
            </section>
	        

            <nav id="menu">
	            <header className="major">
	                <h2>My Feeds</h2>
	            </header>
	            <ul>
	              {this.state.feeds.map((feed, i) => {
                    return <li key={feed.id}><a href="#">{feed.name}</a></li>
                  })

                }
	            </ul>
            </nav>	



	    </div>
	  </div>
  	)
  }
}

export default Sidebar