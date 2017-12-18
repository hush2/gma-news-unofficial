import { AsyncStorage } from 'react-native'

export async function fetchData(url, key) {
  let headers = {}
  let cache = await AsyncStorage.getItem(key).then((data) => JSON.parse(data))
  if (cache) {
    headers = new Headers({
      'If-Modified-Since': cache.date,
      'If-None-Match': cache.etag,
    })
  }

  var req = new Request(url, { method: 'GET', headers })

  return fetch(req)
    .then((res) => {
      if (res.status === 200) {
        return res.json().then((data) => {
          let cache = {
            etag: res.headers.map.etag[0],
            date: res.headers.map['last-modified'][0],
            data: data,
          }
          AsyncStorage.setItem(key, JSON.stringify(cache))
          return data
        })
      } else if (res.status === 304) {
        return AsyncStorage.getItem(key).then((cache) => JSON.parse(cache).data)
      }
      throw new Error(res.statusText)
    })
    .then((jsonData) => jsonData)
    .catch((err) => Promise.reject(err))
}
