import constants from '../constants'

var initialState = {

}

export default (state=initialState, action) => {
  let newState = Object.assign({}, state)

  switch(action.type) {
    case constants.RSS_FEED_RECEIVED:
      console.log('RSS_FEED_RECEIVED: '+JSON.stringify(action.data))
      return newState

    default:
      return state

  }
}