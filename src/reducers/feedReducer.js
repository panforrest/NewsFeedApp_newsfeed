import constants from '../constants'

var initialState = {
	all: null,
	selectedFeed: null
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {

		case constants.FEEDS_RECEIVED:
		    console.log('FEEDS_RECEIVED: '+JSON.stringify(action.data))
			newState['all'] = action.data
			return newState

		case constants.FEED_CREATED:
		    console.log('REDUCER FEED_CREATED: '+JSON.stringify(action.data))
			let array = (newState.all) ? Object.assign([], newState.all) : []
			array.unshift(action.data)
			newState['all'] = array
			return newState

		case constants.FEED_SELECTED:
		    console.log('FEED_SELECTED: '+JSON.stringify(action.data))
			newState['selectedFeed'] = action.data
			return newState	

		default:
			return state
	}
}