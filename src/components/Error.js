import React from 'react'
import { View, Text } from 'react-native'

export default props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>{props.msg || 'Error fetching data.'}</Text>
    </View>
  )
}
