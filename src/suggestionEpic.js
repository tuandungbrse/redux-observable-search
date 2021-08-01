import { combineEpics, ofType } from 'redux-observable'
import { delay, mergeMap, map } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

import { search } from './suggestionSlice'

const endpoint = (keywords) => {
  let url = 'https://en.wikipedia.org/w/api.php'
  var params = {
    action: 'opensearch',
    search: keywords,
    format: 'json'
  }

  url = url + '?origin=*'
  Object.keys(params).forEach((key) => {
    url = url + `&${key}=${params[key]}`
  })
  return url
}

const suggestionEpic = (action$, state$) =>
  action$.pipe(
    ofType('suggestion/search/request'),
    delay(1000),
    mergeMap((action) => {
      return ajax.getJSON(endpoint(action.payload)).pipe(
        map((response) => {
          return search(response[1])
        })
      )
    })
  )

export default combineEpics(suggestionEpic)
