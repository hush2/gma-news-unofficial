import { AsyncStorage } from 'react-native'

const mins = 10 // Do not check for x minutes

export async function fetchData(url, key) {
  let headers = {}
  let cache = await AsyncStorage.getItem(key).then((data) => JSON.parse(data))
  if (cache) {
    headers = new Headers({
      'If-Modified-Since': cache.date,
      'If-None-Match': cache.etag,
    })
    if (Date.now() <= cache.expire) {
      return Promise.resolve(cache.data)
    }
  }
  headers = {} // We'll just use local cache for now
  var req = new Request(url, { method: 'GET', headers })

  return fetch(req)
    .then((res) => {
      if (res.status === 200) {
        return res.json().then((data) => {
          let cache = {
            etag: res.headers.map.etag[0],
            date: res.headers.map['last-modified'][0],
            data: data,
            expire: Date.now() + mins * 60000,
          }
          AsyncStorage.setItem(key, JSON.stringify(cache))
          return data
        })
      } else if (res.status === 304) {
        return AsyncStorage.getItem(key).then((cache) => {
          cache.expire = Date.now() + mins * 60000
          return AsyncStorage.setItem(key, cache).then(
            (cache) => JSON.parse(cache).data
          )
        })
      }
      throw new Error(res.statusText)
    })
    .then((jsonData) => jsonData)
    .catch((err) => Promise.reject(err))
}
