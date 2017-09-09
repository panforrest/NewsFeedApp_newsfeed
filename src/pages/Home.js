import React, { Component } from 'react'
import { Sidebar } from '../components/presentation'
import { Feeds } from '../components/containers'
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
		return(


		    <div id="wrapper">
		        <div id="main">
		            <div className="inner">

                  <section id="banner">
                    <div className="content">
                      <header>
                        <h1>Welcome to NewsFeed</h1>
                        <hr />
                        <p>A free and fully responsive site template</p>
                      </header>
                      <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                      <ul className="actions">
                        <li><a href="#" className="button big">Learn More</a></li>
                      </ul>
                    </div>
                    
                  </section>

      					</div>
      			</div>

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
export default connect(stateToProps, dispatchToProps)(Home)