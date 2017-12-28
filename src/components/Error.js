import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default (props) => {
  return (
    <View style={s.error}>
      <Text>{props.msg || 'Error fetching data.'}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  error: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
