import React, { Component } from 'react'
import { Feeds } from '../containers' 

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
              <Feeds />

              
          </nav>
	      </div>
	    </div>
  	)
  }
}

export default Sidebar