import React, { Component } from 'react'

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
  }

  render(){
  	return(
	  <div id="sidebar">
	    <div className="inner">
	        <section id="search" className="alt">
                <form method="post" action="#">
                	<input type="text" onChange={this.updateFeed.bind(this, 'name')} name="query" id="query" placeholder="Search" /><br />
                	<input type="text" onChange={this.updateFeed.bind(this, 'url')} name="query" id="query" placeholder="Feed URL" /><br />
                	<button>Add Feed</button>
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