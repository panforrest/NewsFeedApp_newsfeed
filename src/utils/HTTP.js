import superagent from 'superagent'
import Promose from 'bluebird'

export default {

  get: (url, params) => {
	return new Promise((resulve, reject) => {
    
      superagent
      .get(url)
      .query(params)
      .end((err, response) => {
      	if (err) {
      	  reject(err)
      	  return
      	}

      	console.log('RESPONSE: '+JSON.stringify(response.body))
      })
	})
  }
}