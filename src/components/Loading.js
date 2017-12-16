import React from 'react'
import { ActivityIndicator } from 'react-native'

export default () => {
  return (
    <ActivityIndicator
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      size='large'/>
  )
}
