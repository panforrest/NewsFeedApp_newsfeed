// method="post" action="#"
    // <div id="sidebar">
import React, { Component } from 'react'
// import { Post } from '../../theme'

class Sidebar extends Component{
  constructor(){
  	super()
  	this.state = {
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
	                <li><a href="index.html">Hacker News</a></li>
	                <li><a href="generic.html">NY Daily Sports News</a></li>
	                <li><a href="elements.html">Elements</a></li>
	                <li><a href="#">Etiam Dolore</a></li>
	                <li><a href="#">Adipiscing</a></li>
	                <li><a href="#">Maximus Erat</a></li>
	                <li><a href="#">Sapien Mauris</a></li>
	                <li><a href="#">Amet Lacinia</a></li>
	            </ul>
            </nav>	



	    </div>
	  </div>
  	)
  }
}

export default Sidebar